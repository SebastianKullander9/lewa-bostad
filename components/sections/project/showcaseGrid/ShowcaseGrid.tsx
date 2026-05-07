import Image from "next/image";
import ObjImage from "./ObjImage";

interface ShowcaseGridProps {
    imageUrls: string[];
    priority: boolean;
}

export default function ShowcaseGrid({ imageUrls, priority }: ShowcaseGridProps) {
    return (
        <div className="w-full grid grid-cols-10 gap-base">
            <div className="col-span-10 lg:col-span-6 overflow-hidden rounded-xl">
                <Image
                    src={imageUrls[0]}
                    alt=""
                    width={1920}
                    height={1920}
                    priority={priority}
                    className="object-contain hover:scale-103 transition-transform duration-300 cursor-pointer"
                />
            </div>
            <div className="flex col-span-10 lg:col-span-2 lg:flex-col gap-base lg:h-full">
                <ObjImage imgUrl={imageUrls[0]} priority={priority} />
                <ObjImage imgUrl={imageUrls[1]} priority={priority} />
            </div>
            <div className="hidden lg:flex col-span-2 flex-col gap-base h-full">
                <ObjImage imgUrl={imageUrls[2]} priority={priority} />
                <ObjImage imgUrl={imageUrls[3]} priority={priority} />
            </div>
        </div>
    );
}
