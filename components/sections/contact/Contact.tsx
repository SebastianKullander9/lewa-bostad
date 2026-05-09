import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import ContactForm from "@/components/ui/forms/ContactForm";
import project1 from "@/public/projects/glansbaggen/Glansbaggen_exterior_1_002.webp";
import project2 from "@/public/projects/glansbaggen/Glansbaggen_Vardagsrum_001.webp";

import ProjectImage from "../callToAction/projects/ProjectImage";
import ContactInfoItem from "./ContactInfoItem";

const EXAMPLE_PROJECTS = [
    {
        title: "Södra Hammarbyhamnen",
        location: "Stockholm",
        status: "Kommande",
        image: project1,
    },
    {
        title: "Lidingö Strand",
        location: "Lidingö",
        status: "Tillgänglig",
        image: project2,
    },
];

export default function Contact() {
    return (
        <section className="section-x-p">
            <div
                className="inner-section-style grid grid-cols-12 gap-large"
                style={{ minHeight: "calc(100vh - var(--header-height) - var(--section-y-p))" }}
            >
                <div className="col-span-12 md:col-span-6 flex flex-col justify-between">
                    <div>
                        <p className="heading-primary mb-md">Låt oss höras</p>
                        <p className="max-w-prose text-large">
                            Vi berättar gärna mer om våra projekt, kommande bostäder eller om du
                            bara har en fråga. Hör av dig — vi svarar snabbt.
                        </p>
                    </div>
                    <div className="flex flex-col gap-xl">
                        <ContactInfoItem Icon={Mail} text={["lewa.bostad@lewa.se"]} />
                        <ContactInfoItem Icon={Phone} text={["+46 12 345 67"]} />
                        <ContactInfoItem
                            Icon={MapPin}
                            text={["Gustav Adolfs Torg", "103 21 STOCKHOLM"]}
                        />
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

/*
<div className="col-span-12 md:col-span-6 flex flex-col justify-between">
    <div>
        <p className="heading-primary mb-md">Medan du väntar</p>
        <p className="text-large max-w-prose">
            Vi hör av oss så snart vi kan. Medan du väntar — ta en titt på våra
            projekt. Kanske är ditt nästa hem redan på gång.
        </p>
    </div>
    <div className="relative flex flex-col items-end">
        <p>Visa alla projekt</p>
        <ProjectImage
            title="Kummelnäshöjden"
            location="Nacka"
            image={project2}
            status="Genomförd"
        />
    </div>
</div>
*/
