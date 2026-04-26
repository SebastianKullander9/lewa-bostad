import Image from "next/image";
import ObjImage from "./ObjImage";

interface ShowcaseGridProps {
    imageUrls: string[];
}

export default function ShowcaseGrid({ imageUrls }: ShowcaseGridProps) {
    return (
        <div className="w-full grid grid-cols-10 gap-lg">
            <div className="col-span-10 lg:col-span-6 overflow-hidden rounded-md">
                <Image
                    src={imageUrls[0]}
                    alt=""
                    width={3000}
                    height={3000}
                    className="object-contain hover:scale-103 transition-transform duration-300 cursor-pointer"
                />
            </div>
            <div className="hidden lg:flex col-span-2 flex-col gap-lg h-full">
                <ObjImage imgUrl={imageUrls[0]} />
                <ObjImage imgUrl={imageUrls[1]} />
            </div>
            <div className="hidden lg:flex col-span-2 flex-col gap-lg h-full">
                <ObjImage imgUrl={imageUrls[2]} />
                <ObjImage imgUrl={imageUrls[3]} />
            </div>
        </div>
    );
}
