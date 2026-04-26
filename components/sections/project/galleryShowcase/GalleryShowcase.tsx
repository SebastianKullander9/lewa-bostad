"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, ArrowLeft } from "lucide-react";

interface GalleryShowcaseProps {
    imageUrls: string[];
    projectTitle: string;
}

export default function GalleryShowcase({ imageUrls, projectTitle }: GalleryShowcaseProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "" : "hidden";
    };

    return (
        <>
            <div
                className={`fixed z-9999 inset-0 bg-surface flex flex-col overflow-y-auto transition-all duration-150 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div className="sticky top-0 z-9999 bg-surface border-b border-background/20 w-full flex items-center px-md mb-xl">
                    <div className="container mx-auto p-xl text-md flex flex-row justify-between">
                        <div
                            onClick={handleOpen}
                            className="inline-flex flex-row items-center gap-xs hover-border cursor-pointer"
                        >
                            <ArrowLeft strokeWidth={2} size={18} />
                            <p>Tillbaka till projekt</p>
                        </div>
                        <p>{projectTitle}</p>
                    </div>
                </div>
                <div className="relative w-full flex flex-col gap-xl pb-xl">
                    {imageUrls.map((item) => (
                        <div key={item} className="flex justify-center">
                            <div className="rounded-md overflow-hidden inline-block">
                                <Image
                                    src={item}
                                    alt=""
                                    width={1920}
                                    height={1080}
                                    className="object-contain h-auto w-auto max-h-[80vh]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                onClick={handleOpen}
                className="col-span-10 flex flex-row gap-xs items-center justify-start lg:justify-end hover-border cursor-pointer z-10"
            >
                <Eye size={18} />
                <p>Visa alla bilder</p>
            </div>
        </>
    );
}
