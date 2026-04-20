import Image from "next/image";
import img1 from "@/public/intro/Interior_1_002.jpg";
import img2 from "@/public/intro/Glansbaggen_exterior_3_002.jpg";
import img3 from "@/public/intro/Interior_2_002.jpg";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function Intro() {
    return (
        <section className="section-x-p">
            <div className="inner-section-h inner-section-style flex flex-row justify-between">
                <div />
                <div className="flex flex-col justify-between w-full">
                    <h2 className="heading-primary max-w-[18ch]">
                        Exklusiva Hem Formade i Hållbart Trä
                    </h2>
                    <div className="flex flex-col gap-md">
                        <p className="max-w-prose mb-md text-base leading-relaxed">
                            Lewa Bostad utvecklar bostäder för dig som värdesätter kvalitet, design
                            och långsiktig hållbarhet. Med stor omsorg om både arkitektur och
                            materialval skapas hem med ett tydligt uttryck och hög standard.
                            Resultatet är moderna bostäder som kombinerar estetik, funktion och ett
                            medvetet val av byggmaterial.
                        </p>
                        <div className="flex flex-row gap-md">
                            <PrimaryButton />
                            <SecondaryButton />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-md h-full">
                    {[img1, img2, img3].map((img, i) => (
                        <div
                            key={i}
                            className="relative w-80 overflow-hidden rounded-md"
                            style={{ height: "calc((65dvh - 2rem - 16px) / 3)" }}
                        >
                            <Image src={img} alt="" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
