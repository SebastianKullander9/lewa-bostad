"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import tree from "@/public/footer/tree-test.jpg";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrollThreshold, setScrollThreshold] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollThreshold(window.scrollY > 149);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="no-section-p flex flex-row justify-between h-(--header-height) pt-lg">
                <Link href="/" className="flex flex-row">
                    <div>
                        <Image src={tree} alt="" width={54} height={54} />
                    </div>
                    <div className="pt-md">
                        <h1 className="text-3xl font-extrabold tracking-tight leading-2">LEWA</h1>
                        <h1 className="text-3xl font-extrabold tracking-tight">BOSTAD</h1>
                    </div>
                </Link>

                <nav className="flex flex-row gap-3xl text-md">
                    <Link href="/vara-projekt">Våra projekt</Link>
                    <Link href="/om-oss">Om oss</Link>
                    <Link href="test">Kontakt</Link>
                </nav>

                <div className="flex flex-row gap-xs h-fit items-center">
                    <p className="">Anmäl intresse</p>
                    <ArrowUpRight size={24} />
                </div>

                <div className="flex flex-row gap-xs h-fit items-center">
                    <p>Svenska</p>
                    <ChevronDown size={16} />
                </div>
            </header>

            <header
                className={`
					fixed top-3 w-full text-background transition-opacity duration-150 z-9999
					${scrollThreshold ? "opacity-100" : "opacity-0 pointer-events-none"}
				`}
            >
                <div className="container bg-white mx-auto rounded-md py-sm px-xl flex flex-row item items-center justify-between">
                    <Link href="/" className="flex flex-col -space-y-3.5">
                        <h1 className="text-xl font-extrabold">LEWA</h1>
                        <h1 className="text-xl font-extrabold">BOSTAD</h1>
                    </Link>

                    <div>
                        <nav className="flex flex-row gap-3xl text-md">
                            <Link href="/vara-projekt">Våra projekt</Link>
                            <Link href="/om-oss">Om oss</Link>
                            <Link href="test">Kontakt</Link>
                        </nav>
                    </div>

                    <div className="flex flex-row gap-xs h-fit items-center">
                        <p>Svenska</p>
                        <ChevronDown size={16} />
                    </div>
                </div>
            </header>
        </>
    );
}
