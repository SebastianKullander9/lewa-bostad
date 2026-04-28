"use client";
import Image from "next/image";
import { useState } from "react";
import { IconPinFill32 } from "nucleo-core-fill-32";

interface Props {
    lat: number;
    lng: number;
    aspect?: string;
}

export default function Map({ lat, lng, aspect = "aspect-square" }: Props) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={`relative w-full cursor-none ${aspect}`}
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
                    <IconPinFill32 />
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
