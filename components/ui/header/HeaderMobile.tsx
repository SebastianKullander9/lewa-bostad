"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "../hamburger/Hamburger";
import { Link } from "next-view-transitions";
import { navLinks } from "@/lib/navigation";
import Logo from "./Logo";

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const logoProps = { pathname, setIsOpen };

    return (
        <>
            <header className="lg:hidden sticky top-0 no-section-p bg-background z-9999 h-(--header-height-mobile)">
                <div className="inner-section-p w-full flex items-center justify-between ">
                    <Logo {...logoProps} />
                    <div className="flex items-center">
                        <button type="button" onClick={() => setIsOpen(!isOpen)}>
                            <Hamburger />
                        </button>
                    </div>
                </div>
            </header>
            <div
                className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} no-section-p fixed inset-0 bg-background z-9999 transition-opacity duration-200`}
            >
                <header className="inner-section-p h-(--header-height-mobile)">
                    <div className="w-full flex items-center justify-between">
                        <Logo {...logoProps} />
                        <div className="flex items-center">
                            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                                <div className="relative w-5.5 h-5.5">
                                    <span className="absolute top-1/2 left-0 w-5.5 h-0.5 bg-surface -translate-y-1/2 rotate-45" />
                                    <span className="absolute top-1/2 left-0 w-5.5 h-0.5 bg-surface -translate-y-1/2 -rotate-45" />
                                </div>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="inner-section-p w-full h-[calc(100vh-var(--header-height-mobile)*2)] flex items-center">
                    <div className="flex flex-col gap-xl heading-primary">
                        {navLinks
                            .filter((link) => link.href !== pathname)
                            .map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
