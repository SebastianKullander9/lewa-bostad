import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "@/components/ui/header/Header";
import { ViewTransitions } from "next-view-transitions";
import HeaderMobile from "@/components/ui/header/HeaderMobile";
import CookieBanner from "@/components/ui/cookies/CookieBanner";
import { Geist } from "next/font/google";

const geist = Geist({
    subsets: ["latin"],
    weight: ["100", "400", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Lewa Bostad",
    description:
        "Vi bygger arkitektritade radhus och parhus med omsorgsfull design i attraktiva tillväxtområden. Kvalitet, hållbarhet och ett långsiktigt boende.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="sv" className={`antialiased ${geist.className}`}>
                <body>
                    <CookieBanner />
                    <HeaderMobile />
                    <Header />
                    {children}
                </body>
            </html>
        </ViewTransitions>
    );
}
