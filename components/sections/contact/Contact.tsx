import {
    IconAtSignFill32,
    IconEnvelopeFill32,
    IconPhoneFill32,
    IconPinFill32,
} from "nucleo-core-fill-32";

import ContactForm from "@/components/ui/forms/ContactForm";

import ContactInfoItem from "./ContactInfoItem";

export default function Contact() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style grid grid-cols-12">
                <div className="col-span-12 md:col-span-3">
                    <p className="eyebrow">Kontakta oss</p>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col gap-large xl:gap-0">
                    <div>
                        <p className="heading-primary mb-md">Låt oss höras</p>
                        <p className="max-w-prose text-large">
                            Vi berättar gärna mer om våra projekt, kommande bostäder eller om du
                            bara har en fråga. Hör av dig — vi svarar snabbt.
                        </p>
                    </div>
                    <div className="flex flex-col gap-xl flex-1 justify-center">
                        <ContactInfoItem Icon={IconEnvelopeFill32} text={["lewa.bostad@lewa.se"]} />
                        <ContactInfoItem Icon={IconPhoneFill32} text={["+46 12 345 67"]} />
                        <ContactInfoItem
                            Icon={IconPinFill32}
                            text={["Gustav Adolfs Torg", "103 21 STOCKHOLM"]}
                        />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-4 xl:col-span-3 mt-8 xl:mt-0">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
