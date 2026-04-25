import ProjectMapInteractive from "../project/ProjectMap";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "@/components/ui/forms/ContactForm";

export default function Contact() {
    return (
        <section className="section-x-p pb-xs sm:pb-xs md:pb-sm lg:pb-sm xl:pb-md">
            <div
                className="inner-section-style grid grid-cols-12"
                style={{ minHeight: "calc(100vh - var(--header-height) - var(--section-y-p))" }}
            >
                <div className="flex flex-row justify-between col-span-12">
                    <div>
                        <p className="heading-primary mb-md">Låt oss höras</p>
                        <p className="max-w-prose text-lg">
                            Vi berättar gärna mer om våra projekt, kommande bostäder eller om du
                            bara har en fråga. Hör av dig — vi svarar snabbt.
                        </p>
                    </div>
                    <div>
                        <p className="eyebrow">KONTAKTA OSS</p>
                    </div>
                </div>
                <div className="col-span-4 flex flex-col justify-between">
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
                <div className="flex-1 aspect-square relative col-span-4 col-start-9">
                    <ProjectMapInteractive lat={59.3293} lng={18.0686} />
                </div>
            </div>
        </section>
    );
}
