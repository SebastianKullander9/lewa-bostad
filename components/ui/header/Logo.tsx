import { Link } from "next-view-transitions";
import React from "react";

interface LogoProps {
    pathname: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Logo({ pathname, setIsOpen }: LogoProps) {
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
                    onClick={() => setIsOpen(false)}
                >
                    <h1 className="text-xl font-extrabold">LEWA</h1>
                    <h1 className="text-xl font-extrabold">BOSTAD</h1>
                </Link>
            )}
        </>
    );
}
