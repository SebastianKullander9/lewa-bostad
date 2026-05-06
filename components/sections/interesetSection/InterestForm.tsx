"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { IconCheckboxUncheckedOutline18, IconCheckboxCheckedOutline18 } from "nucleo-ui-outline-18";
import { cn } from "@/lib/utils";

export default function InterestForm() {
    const [form, setForm] = useState({
        email: "",
        privacy: false,
        error: "",
        success: "",
    });
    const [loading, setLoading] = useState(false);

    const Icon = form.privacy ? IconCheckboxCheckedOutline18 : IconCheckboxUncheckedOutline18;
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const buttonIsDisabled = !form.privacy || !form.email;

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidEmail(form.email)) {
            setForm({ ...form, error: "VÄNGLIGEN ANGE EN GILTIG MEJLADRESS." });
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setForm({ ...form, error: "", success: "Tack för ditt intresse. Vi hör av oss!" });
        }, 1500);
    };

    if (form.success) {
        return <p>{form.success}</p>;
    }

    return (
        <form className="w-full flex flex-col gap-md" onSubmit={handleSubmit} noValidate>
            <div className="relative">
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value, error: "" })}
                    placeholder="Fyll i din mejladress här"
                    className={cn(
                        "w-full py-md pr-32",
                        "focus:outline-none placeholder:text-background ",
                        "border-b text-large",
                        form.error ? "border-red-700" : "border-background",
                    )}
                />
                <button
                    type="submit"
                    className={cn(
                        "absolute right-0 top-1/2 -translate-y-1/2 min-w-30 bg-surface ml-md",
                        (buttonIsDisabled || loading) && "pointer-events-none",
                    )}
                    disabled={buttonIsDisabled || loading}
                >
                    <PrimaryButton label="Skicka" disabled={buttonIsDisabled} loading={loading} />
                </button>
            </div>
            <p className="text-xs text-red-700">{form.error}</p>

            <button
                type="button"
                onClick={() => setForm({ ...form, privacy: !form.privacy })}
                className="inline-flex flex-row items-center gap-xs"
            >
                <Icon />
                <p className="hidden sm:block text-small text-start">
                    Genom att skicka in formuläret godkänner du vår integritetspolicy.
                </p>
                <p className="sm:hidden text-small text-start">Jag godkänner integritetspolicyn.</p>
            </button>
        </form>
    );
}
