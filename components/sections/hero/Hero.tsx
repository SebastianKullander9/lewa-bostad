import Image from "next/image";
import HeroImage from "@/public/hero/hero2.webp";

export default function Hero() {
    return (
        <section className="h-[calc(100dvh-var(--header-height))] section-xy-m relative rounded-md overflow-hidden">
            <Image
                src={HeroImage}
                alt="Hero image with one of lewa bostads projects"
                fill
                className="object-cover"
                priority
                quality={85}
            />
        </section>
    );
}
