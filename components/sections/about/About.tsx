import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import interior2 from "@/public/projects/kummelnashojden/Interior_2_002.jpg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function About() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style grid grid-cols-10">
                <div className="flex flex-col justify-between">
                    <p className="eyebrow">Om oss</p>
                    <ChevronDown strokeWidth={2} />
                </div>
                <div className="col-span-4 col-start-4 flex flex-col justify-between">
                    <p className="heading-primary max-w-[18ch]">
                        Vi bygger hem du faktiskt vill bo i
                    </p>
                    <div className="flex flex-col gap-xl">
                        <p className="max-w-prose text-lg">
                            Lewa Bostad är ett familjeägt bostadsbolag med rötterna i Mellansverige.
                            Vi skapar noggrant utformade hem med hållbara material och ett hantverk
                            som syns i varje detalj.
                        </p>
                        <div>
                            <PrimaryButton />
                        </div>
                    </div>
                </div>

                <div className="relative h-full overflow-hidden col-span-3 flex justify-end">
                    <Image
                        src={interior2}
                        alt=""
                        width={2000}
                        height={2000}
                        className="object-cover w-auto rounded-lg aspect-square"
                    />
                </div>
            </div>
        </section>
    );
}
