"use client";

import { useState } from "react";
import Script from "next/script";
import ConsentButton from "./ConsentButton";
import { cn } from "@/lib/utils";

type ConsentStatus = "accepted" | "declined" | "pending";

const COOKIE_NAME = "cookie_consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

function getConsentCookie(): ConsentStatus {
    const cookies = Object.fromEntries(
        document.cookie
            .split("; ")
            .filter(Boolean)
            .map((c) => {
                const [key, ...val] = c.split("=");
                return [key, val.join("=")];
            }),
    );

    const value = cookies[COOKIE_NAME];
    if (value === "accepted" || value === "declined") return value;
    return "pending";
}

function setConsentCookie(status: "accepted" | "declined") {
    document.cookie = `${COOKIE_NAME}=${status}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure`;
}

export default function CookieBanner() {
    const [consent, setConsent] = useState<ConsentStatus>(() => {
        if (typeof window === "undefined") return "pending";
        return getConsentCookie();
    });

    const handleAccept = () => {
        setConsentCookie("accepted");
        setConsent("accepted");
    };

    const handleDecline = () => {
        setConsentCookie("declined");
        setConsent("declined");
    };

    return (
        <>
            {consent === "pending" && (
                <div
                    className={cn(
                        "fixed z-9999 inner-section-p max-w-120 flex flex-col gap-large",
                        "bg-surface text-background border border-background shadow-lg rounded-md",
                        "bottom-0 left-0 sm:bottom-xl sm:left-xl",
                    )}
                >
                    <p className="text-large font-bold">Din integritet är viktig för oss</p>
                    <p className="text-medium">
                        Vi använder cookies för att förstå hur besökare använder vår webbplats — det
                        hjälper oss att göra den bättre. Vi delar aldrig dina uppgifter med tredje
                        part i marknadsföringssyfte. Läs mer i vår{" "}
                        <span className="underline cursor-pointer">integritetspolicy.</span>
                    </p>
                    <div className="flex flex-row gap-large">
                        <ConsentButton label="Avvisa" onClick={handleDecline} />
                        <ConsentButton label="Acceptera" onClick={handleAccept} />
                    </div>
                </div>
            )}
        </>
    );
}
