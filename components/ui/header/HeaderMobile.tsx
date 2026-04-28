"use client";

import { useState } from "react";
import Link from "next/link";
import Hamburger from "../hamburger/Hamburger";
import { IconGridFill18, IconCircleInfoFill18, IconContactsFill18 } from "nucleo-ui-fill-18";

/*interface HeaderMobileProps {
	
}*/

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="lg:hidden sticky top-0 no-section-p bg-background z-9999 h-(--header-height-mobile)">
                <div className="inner-section-p w-full flex items-center justify-between ">
                    <Link href="/" className="flex flex-col -space-y-3.5">
                        <h1 className="text-xl font-extrabold">LEWA</h1>
                        <h1 className="text-xl font-extrabold">BOSTAD</h1>
                    </Link>
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
                        <Link href="/" className="flex flex-col -space-y-3.5">
                            <h1 className="text-xl font-extrabold">LEWA</h1>
                            <h1 className="text-xl font-extrabold">BOSTAD</h1>
                        </Link>
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
                <div className="inner-section-p w-full h-[calc(100vh-var(--header-height-mobile)*2)] flex items-center ">
                    <div className="flex flex-col gap-xl text-sm">
                        <div className="flex flex-row items-center gap-sm">
                            <div className="bg-surface p-xs rounded-lg">
                                <IconGridFill18 className="text-background" />
                            </div>

                            <p className="text-surface">Våra projekt</p>
                        </div>
                        <div className="flex flex-row items-center gap-sm">
                            <div className="bg-surface p-xs rounded-lg">
                                <IconCircleInfoFill18 className="text-background" />
                            </div>

                            <p className="text-surface">Om oss</p>
                        </div>
                        <div className="flex flex-row items-center gap-sm">
                            <div className="bg-surface p-xs rounded-lg">
                                <IconContactsFill18 className="text-background" />
                            </div>

                            <p className="text-surface">Kontakt</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
