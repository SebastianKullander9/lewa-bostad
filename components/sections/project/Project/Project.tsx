import ObjInfo from "./objInfo";
import { Flag, CalendarDays, House, HouseHeart, Grid2x2, Leaf, Eye } from "lucide-react";
import Map from "../../../ui/map/Map";
import { ProjectType } from "@/types/project.type";
import ShowcaseGrid from "../showcaseGrid/ShowcaseGrid";
import GalleryShowcase from "../galleryShowcase/GalleryShowcase";

interface ProjectProps {
    project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
    const {
        title,
        introText,
        showcaseImages,
        galleryImages,
        objectInfo,
        aboutText,
        placement,
        sustainability,
    } = project;

    const objInfoItems = [
        { title: "Byggstart", value: objectInfo.buildStart, Icon: Flag },
        { title: "Inflyttning", value: objectInfo.moveIn, Icon: CalendarDays },
        { title: "Antal bostäder", value: objectInfo.estateAmount, Icon: House },
        { title: "Antal rum", value: objectInfo.roomAmount, Icon: HouseHeart },
        { title: "Storlek", value: objectInfo.size, Icon: Grid2x2 },
        { title: "Energiklass", value: objectInfo.energyClass, Icon: Leaf },
    ];

    return (
        <article className="section-x-p">
            <div className="inner-section-style flex flex-col gap-md">
                <div className="flex flex-col gap-xl lg:gap-0 lg:flex-row justify-between">
                    <div className="flex flex-col gap-xl">
                        <p className="heading-primary">{title}</p>
                        <p className="text-lg font-bo max-w-prose">{introText}</p>
                    </div>
                    <div className="flex flex-col justify-end z-9999">
                        <GalleryShowcase imageUrls={galleryImages} projectTitle={title} />
                    </div>
                </div>

                <ShowcaseGrid imageUrls={showcaseImages} />
                <div className="w-full grid grid-cols-10 gap-lg">
                    <div className="col-span-10 lg:col-span-6 flex flex-col gap-xl">
                        <p className="heading-secondary mt-md">Objektinfo</p>
                        <div className="grid grid-cols-4 lg:grid-cols-3 gap-md">
                            {objInfoItems.map((item) => (
                                <ObjInfo key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-10 lg:col-span-6 order-2">
                        <p className="heading-secondary mb-xl">Om projektet</p>
                        <p className="text-lg max-w-prose leading-relaxed">{aboutText}</p>
                    </div>
                    <div className="order-1 col-span-10 lg:col-span-4 lg:col-start-7">
                        <p className="heading-secondary mb-xl">Läge</p>
                        <Map lat={59.36} lng={18.15} aspect="aspect-5/2 lg:aspect-square" />
                    </div>
                </div>
            </div>
        </article>
    );
}
