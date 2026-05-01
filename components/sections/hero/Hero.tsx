import Image from "next/image";
import HeroImage from "@/public/hero/hero2.webp";

export default function Hero() {
    return (
        <section className="w-full section-x-p section-mt relative rounded-md overflow-hidden">
            <Image
                src={HeroImage}
                alt="Hero image with one of lewa bostads projects"
                className="object-cover aspect-auto rounded-xl"
                priority
                quality={85}
            />
        </section>
    );
}
