import Image from "next/image";
import { StaticImageData } from "next/image";
import { Link } from "next-view-transitions";

import StatusBadge from "./StatusBadge";

interface ProjectImageProps {
    title: string;
    location: string;
    image: StaticImageData;
    status: string;
}

export default function ProjectImage({ title, location, image, status }: ProjectImageProps) {
    return (
        <Link href="/vara-projekt" className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt=""
                    className="object-contain block hover:scale-103 transform transition-all duration-350"
                    placeholder="blur"
                    width={1280}
                    height={720}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent rounded-xl pointer-events-none" />

            <div className="absolute bottom-0 text-surface">
                <div className="p-base">
                    <p className="text-white font-semibold text-large leading-tight">{title}</p>
                    <p className="text-white/70 text-small">{location}</p>
                </div>
            </div>
            <StatusBadge status={status} />
        </Link>
    );
}
