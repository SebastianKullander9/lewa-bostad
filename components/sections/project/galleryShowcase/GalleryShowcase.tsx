import { StaticImageData } from "next/image";
import Image from "next/image";
import { IconPhotosFill32, IconUndoFill32 } from "nucleo-core-fill-32";

interface GalleryShowcaseProps {
    imageUrls: StaticImageData[];
    projectTitle: string;
    isOpen: boolean;
    handleOpen: () => void;
}

export default function GalleryShowcase({
    imageUrls,
    projectTitle,
    isOpen,
    handleOpen,
}: GalleryShowcaseProps) {
    return (
        <>
            <div
                className={`fixed z-9999 inset-0 bg-surface flex flex-col overflow-y-auto transition-all duration-150 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div className="sticky top-0 z-9999 bg-surface border-b border-background/20 w-full flex items-center px-md">
                    <div className="w-full md:container mx-auto h-15 items-center text-md flex flex-row justify-between">
                        <div
                            onClick={handleOpen}
                            className="inline-flex flex-row items-center gap-xs cursor-pointer"
                        >
                            <IconUndoFill32 size={20} />
                            <p className="text-medium hover-border">Tillbaka till projekt</p>
                        </div>
                        <p className="text-medium">{projectTitle}</p>
                    </div>
                </div>
                <div className="relative w-full flex flex-col gap-base mb-base px-md mt-base">
                    {imageUrls.map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="rounded-xl overflow-hidden inline-block">
                                <Image
                                    src={item}
                                    alt=""
                                    width={1920}
                                    height={1080}
                                    className="object-contain aspect-auto max-h-[80vh]"
                                    placeholder="blur"
                                    sizes="100vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                onClick={handleOpen}
                className="col-span-10 hidden md:flex flex-row gap-xs items-center justify-start lg:justify-end cursor-pointer z-10"
            >
                <IconPhotosFill32 size={26} />
                <p className="hover-border ">Visa alla bilder</p>
            </div>
        </>
    );
}
