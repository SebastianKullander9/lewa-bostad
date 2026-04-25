import estate from "@/public/aboutEstates/Exterior_2_Wood_002.jpg";
import estate2 from "@/public/aboutEstates/Glansbaggen_Vardagsrum_001.jpg";
import estate4 from "@/public/aboutEstates/Interior_7_002.jpg";
import Image from "next/image";
import TextBlock from "./TextBlock";

export default function AboutEstates() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style text-background grid grid-cols-12 gap-md pb-24">
                <div className="col-span-8 relative">
                    <Image
                        src={estate}
                        alt=""
                        width={2500}
                        height={2500}
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="col-span-4 flex flex-col gap-md">
                    <div className="relative flex-3">
                        <Image
                            src={estate4}
                            alt=""
                            fill
                            className="object-cover object-bottom/5 rounded-md"
                        />
                    </div>
                    <div className="relative flex-2">
                        <Image src={estate2} alt="" fill className="object-cover rounded-md" />
                    </div>
                </div>
                <div className="col-span-12 flex flex-col gap-48">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="heading-primary">Kvalitet i varje detalj</p>
                            <p className="text-xl max-w-prose">
                                Varje bostad är byggd i massivt trä – ett material som andas,
                                reglerar inomhusklimatet och bara blir vackrare med åren.
                            </p>
                        </div>
                        <p className="eyebrow">Om bostäderna</p>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 col-start-5 flex flex-row justify-between">
                            <TextBlock
                                number="01"
                                title="Naturligt material"
                                text="Vi har valt trä som bärande material och stomme genom hela
                                byggnaden, inte bara som en ytfinish. Det ger bostäderna en naturlig
                                värme och ett inomhusklimat som är svårt att uppnå med
                                konventionella byggmetoder."
                            />
                            <TextBlock
                                number="02"
                                title="Tidlös hantverk"
                                text="Kvaliteten syns i detaljerna. Från snickerier och golv till bärande
                                konstruktion är materialen noggrant utvalda med fokus på hållbarhet
                                och tidlöshet. Här byggs det för att hålla i generationer."
                            />
                            <TextBlock
                                number="03"
                                title="Byggt för livet"
                                text="Kvaliteten syns i detaljerna. Från snickerier och golv till bärande
                                konstruktion är materialen noggrant utvalda med fokus på hållbarhet
                                och tidlöshet. Här byggs det för att hålla i generationer."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
