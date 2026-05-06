import FeatureBlock from "@/components/ui/featureBlock/FeatureBlock";
import Image from "next/image";
import livingRoom from "@/public/whyus/Interior_1_002.jpg";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

export default function WhyUs() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style grid grid-cols-12 gap-xl">
                <div className="col-span-12 relative">
                    <Image src={livingRoom} alt="" className="w-full object-contain rounded-xl" />
                </div>
                <div className="col-span-12 lg:col-span-3 mt-base mb-4 lg:mt-12">
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
                    <div
                        className={cn(
                            "flex flex-col md:flex-row gap-base mt-lg",
                            "col-span-12 lg:col-span-4   lg:row-start-7 lg:col-start-4",
                        )}
                    >
                        <Link href="/kontakt" className="md:max-w-35">
                            <PrimaryButton label="Kontakta oss" />
                        </Link>
                        <Link href="/vara-projekt" className="md:max-w-35">
                            <SecondaryButton label="Våra projekt" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
