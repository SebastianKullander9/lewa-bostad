import { StaticImageData } from "next/image";
import Image from "next/image";

interface ObjImageProps {
    imgUrl: StaticImageData;
    priority: boolean;
}

export default function ObjImage({ imgUrl, priority }: ObjImageProps) {
    return (
        <div className="w-1/2 lg:w-full aspect-square lg:aspect-auto lg:h-full relative overflow-hidden rounded-xl">
            <Image
                src={imgUrl}
                fill
                alt=""
                priority={priority}
                className="object-cover hover:scale-103 transition-transform duration-300 cursor-pointer"
                placeholder="blur"
                sizes="(max-width: 1024px) 50vw, 20vw"
            />
        </div>
    );
}
