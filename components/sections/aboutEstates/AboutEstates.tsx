import estate from "@/public/aboutEstates/Exterior_2_Wood_002.jpg";
import estate2 from "@/public/aboutEstates/Glansbaggen_Vardagsrum_001.jpg";
import estate4 from "@/public/aboutEstates/Interior_7_002.jpg";
import Image from "next/image";
import FeatureBlock from "@/components/ui/featureBlock/FeatureBlock";

export default function AboutEstates() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style text-background grid grid-cols-12 pb-12">
                <div className="col-span-12 grid grid-cols-12 gap-base">
                    <div className="col-span-12 md:col-span-8">
                        <Image
                            src={estate}
                            alt=""
                            width={2500}
                            height={2500}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-row md:flex-col gap-base">
                        <div className="w-full relative md:flex-3 aspect-square md:aspect-auto">
                            <Image
                                src={estate4}
                                alt=""
                                fill
                                className="object-cover object-bottom/5 rounded-xl"
                            />
                        </div>
                        <div className="w-full relative md:flex-2 aspect-square md:aspect-auto">
                            <Image src={estate2} alt="" fill className="object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3 mt-base mb-8 mt-8 lg:mt-12">
                    <p className="heading-primary">Varför Välja Oss?</p>
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-base ">
                    <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:row-start-3 lg:col-start-4">
                        <FeatureBlock
                            title="Din egen mäklare"
                            number="01"
                            text="Du får en dedikerad mäklare som känner din affär utan och innan. Inget vidarebefordras, inget faller mellan stolarna."
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:row-start-3 lg:col-start-7">
                        <FeatureBlock
                            title="Alltid tillgängliga"
                            number="02"
                            text="Frågor dyker upp på kvällar och helger. Vi svarar när det passar dig, inte bara under kontorstid."
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:row-start-3 lg:col-start-10">
                        <FeatureBlock
                            title="Lokal kännedom på djupet"
                            number="03"
                            text="Vi vet vad grannarna betalt, vilket håll solen faller och vilken skola som ligger närmast. Den kunskapen förhandlar vi med."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
