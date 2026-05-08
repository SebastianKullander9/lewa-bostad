"use client";

import ObjInfo from "./objInfo";
import { useState } from "react";
import {
    IconGridLayoutFill32,
    IconBed2Fill32,
    IconCalendarFill32,
    IconCalendarCheck2Fill32,
    IconHouse4Fill32,
    IconLeaves3Fill32,
} from "nucleo-core-fill-32";
import Map from "../../../ui/map/Map";
import { ProjectType } from "@/types/project.type";
import ShowcaseGrid from "../showcaseGrid/ShowcaseGrid";
import GalleryShowcase from "../galleryShowcase/GalleryShowcase";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

interface ProjectProps {
    project: ProjectType;
    priority: boolean;
}

export default function Project({ project, priority }: ProjectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { title, introText, showcaseImages, galleryImages, objectInfo, aboutText } = project;
    const TitleTag = priority ? "h1" : "h2";

    const objInfoItems = [
        { title: "Byggstart", value: objectInfo.buildStart, Icon: IconCalendarFill32 },
        { title: "Inflyttning", value: objectInfo.moveIn, Icon: IconCalendarCheck2Fill32 },
        { title: "Antal bostäder", value: objectInfo.estateAmount, Icon: IconHouse4Fill32 },
        { title: "Antal rum", value: objectInfo.roomAmount, Icon: IconBed2Fill32 },
        { title: "Storlek", value: objectInfo.size, Icon: IconGridLayoutFill32 },
        { title: "Energiklass", value: objectInfo.energyClass, Icon: IconLeaves3Fill32 },
    ];

    const handleOpen = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "" : "hidden";
    };

    return (
        <article className="section-x-p">
            <div className="inner-section-style flex flex-col gap-md">
                <div className="flex flex-col gap-base lg:gap-0 lg:flex-row justify-between">
                    <div className="flex flex-col gap-base">
                        <TitleTag className="heading-primary">{title}</TitleTag>
                        <p className="text-large font-bo max-w-prose">{introText}</p>
                    </div>
                    <div className="flex flex-col justify-end z-9999">
                        <GalleryShowcase
                            imageUrls={galleryImages}
                            projectTitle={title}
                            isOpen={isOpen}
                            handleOpen={handleOpen}
                        />
                    </div>
                </div>
                <ShowcaseGrid imageUrls={showcaseImages} priority={priority} />
                <button onClick={handleOpen} className="md:hidden mt-md">
                    <PrimaryButton label="Visa alla 11 bilder" className="text-center" />
                </button>

                {/* MOBILE */}
                <div className="flex flex-col gap-lg lg:hidden">
                    <div>
                        <h3 className="heading-secondary mt-md">Objektinfo</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl mt-base">
                            {objInfoItems.map((item) => (
                                <ObjInfo key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="heading-secondary mb-base">Läge</h3>
                        <Map
                            lat={59.36}
                            lng={18.15}
                            aspect="aspect-3/4 sm:aspect-5/4 md:aspect-6/3"
                        />
                    </div>
                    <div>
                        <h3 className="heading-secondary mb-base">Om projektet</h3>
                        <p className="text-large max-w-prose leading-relaxed">{aboutText}</p>
                    </div>
                </div>

                {/* DESKTOP */}
                <div className="hidden lg:grid grid-cols-10 gap-lg">
                    <div className="col-span-6 flex flex-col gap-lg">
                        <div>
                            <h3 className="heading-secondary">Objektinfo</h3>
                            <div className="grid grid-cols-3 gap-xl mt-base">
                                {objInfoItems.map((item) => (
                                    <ObjInfo key={item.title} {...item} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="heading-secondary mb-base">Om projektet</h3>
                            <p className="text-large max-w-prose leading-relaxed">{aboutText}</p>
                        </div>
                    </div>
                    <div className="col-span-4 col-start-7">
                        <h3 className="heading-secondary mb-base">Läge</h3>
                        <Map lat={59.36} lng={18.15} aspect="aspect-4/3" />
                    </div>
                </div>
            </div>
        </article>
    );
}
