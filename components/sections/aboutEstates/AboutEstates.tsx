import estate from "@/public/aboutEstates/Exterior_2_Wood_002.webp";
import estate2 from "@/public/aboutEstates/Glansbaggen_Vardagsrum_001.webp";
import estate4 from "@/public/aboutEstates/Interior_7_002.webp";
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
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, 67vw"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-row md:flex-col gap-base">
                        <div className="w-full relative md:flex-3 aspect-square md:aspect-auto">
                            <Image
                                src={estate4}
                                alt=""
                                fill
                                className="object-cover object-bottom/5 rounded-xl"
                                placeholder="blur"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-full relative md:flex-2 aspect-square md:aspect-auto">
                            <Image
                                src={estate2}
                                alt=""
                                fill
                                className="object-cover rounded-xl"
                                placeholder="blur"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3 mt-base mb-8 mt-8 lg:mt-12">
                    <h1 className="heading-primary">Hem Vi är Stolta Över</h1>
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-base ">
                    <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:row-start-3 lg:col-start-4">
                        <FeatureBlock
                            title="Genomtänkt design"
                            number="01"
                            text="Varje bostad är utformad med omsorg om detaljer — från planlösning till materialval. Vi bygger hem som håller över tid, både estetiskt och funktionellt."
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:row-start-3 lg:col-start-7">
                        <FeatureBlock
                            title="Hållbart byggande"
                            number="02"
                            text="Vi använder moderna byggmetoder och energieffektiva lösningar som minskar miljöpåverkan och sänker dina boendekostnader."
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:row-start-3 lg:col-start-10">
                        <FeatureBlock
                            title="Bästa lägen"
                            number="03"
                            text="Våra projekt planeras med läget i fokus — nära natur, kommunikationer och service. Ett hem ska fungera i vardagen, inte bara se bra ut på bild."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
