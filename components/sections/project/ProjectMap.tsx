"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
    lat: number;
    lng: number;
}

export default function ProjectMapInteractive({ lat, lng }: Props) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="relative w-full aspect-square cursor-none"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onClick={() => window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank")}
        >
            <Image
                src={`/api/map?lat=${lat}&lng=${lng}`}
                alt="Karta"
                fill
                unoptimized
                className="object-cover rounded-md"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-10 h-10 rounded-full bg-background/50 animate-ping [animation-duration:1.5s]" />
                    <div className="w-4 h-4 rounded-full bg-background border-2 border-surface z-10" />
                </div>
            </div>

            {visible && (
                <div
                    className="absolute pointer-events-none z-20 px-3 py-1.5 bg-background text-surface text-sm rounded-full whitespace-nowrap -translate-x-1/2 -translate-y-full -mt-2"
                    style={{ left: pos.x, top: pos.y }}
                >
                    Visa i Google Maps
                </div>
            )}
        </div>
    );
}
