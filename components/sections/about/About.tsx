import interior2 from "@/public/projects/kummelnashojden/Interior_2_002.webp";
import Image from "next/image";
import { IconArrowBoldDownFill32 } from "nucleo-core-fill-32";
import { cn } from "@/lib/utils";

const Body = () => (
    <>
        <p className="max-w-prose text-large">
            Lewa Bostad är ett familjeägt bostadsbolag med rötterna i Mellansverige. Vi skapar
            noggrant utformade hem med hållbara material och ett hantverk som syns i varje detalj.
        </p>
    </>
);

export default function About() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style grid grid-cols-24">
                <div className="col-span-1 hidden md:flex items-end ">
                    <IconArrowBoldDownFill32 className="rounded-xl" />
                </div>
                <div
                    className={cn(
                        "flex flex-col justify-between",
                        "col-span-24 col-start-0 md:col-span-8 md:col-start-7",
                    )}
                >
                    <h1 className="heading-primary mb-12 md:mb-0">
                        Vi bygger hem du faktiskt vill bo i
                    </h1>
                    <div className="hidden md:block">
                        <Body />
                    </div>
                </div>
                <div className="col-span-24  md:col-span-8 lg:col-span-7 md:col-start-17 lg:col-start-18 mb-12 md:mb-0">
                    <Image
                        src={interior2}
                        alt=""
                        priority
                        placeholder="blur"
                        className="object-cover w-auto rounded-xl aspect-square"
                    />
                </div>
                <div className="col-span-24 md:hidden">
                    <Body />
                    <div className="col-span-24 flex justify-end">
                        <IconArrowBoldDownFill32 className="rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
