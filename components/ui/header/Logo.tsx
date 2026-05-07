import { Link } from "next-view-transitions";
import React from "react";

interface LogoProps {
    pathname: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}

export default function Logo({ pathname, setIsOpen, isOpen }: LogoProps) {
    return (
        <>
            {pathname === "/" ? (
                <div className="flex flex-col -space-y-3.5">
                    <h1 className="text-xl font-extrabold">LEWA</h1>
                    <h1 className="text-xl font-extrabold">BOSTAD</h1>
                </div>
            ) : (
                <Link
                    href="/"
                    className="flex flex-col -space-y-3.5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h1 className="text-xl font-extrabold">LEWA</h1>
                    <h1 className="text-xl font-extrabold">BOSTAD</h1>
                </Link>
            )}
        </>
    );
}
