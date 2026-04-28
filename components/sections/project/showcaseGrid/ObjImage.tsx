import Image from "next/image";

interface ObjImageProps {
    imgUrl: string;
}

export default function ObjImage({ imgUrl }: ObjImageProps) {
    return (
        <div className="w-1/2 lg:w-full aspect-square lg:aspect-auto lg:h-full relative overflow-hidden rounded-md">
            <Image
                src={imgUrl}
                fill
                alt=""
                className="object-cover hover:scale-103 transition-transform duration-300 cursor-pointer"
            />
        </div>
    );
}
