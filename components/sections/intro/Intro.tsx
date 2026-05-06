import Image from "next/image";
import img1 from "@/public/intro/Interior_1_002.jpg";
import img2 from "@/public/intro/Glansbaggen_exterior_3_002.jpg";
import img3 from "@/public/intro/Interior_2_002.jpg";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import { IconArrowBoldDownFill32 } from "nucleo-core-fill-32";
import { Link } from "next-view-transitions";

const shortText =
    "Lewa Bostad bygger arkitektritade radhus och parhus med omsorgsfull design. Men framförallt skapar vi trivsamma kvarter där livet får ta plats – både innanför tröskeln och utanför dörren.";

const longText = "Ett hem är så mycket mer än det som ryms inom fyra väggar. " + shortText;

const Buttons = () => (
    <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row gap-md">
            <Link href="/vara-projekt">
                <PrimaryButton label="Våra projekt" />
            </Link>
            <Link href="/om-oss">
                <SecondaryButton label="Läs mer" />
            </Link>
        </div>
        <IconArrowBoldDownFill32 className="rounded-xl sm:hidden" size={22} />
    </div>
);

const Body = () => (
    <>
        <p className="max-w-prose mb-md text-base leading-relaxed">
            <span className="hidden lg:inline">{longText}</span>
            <span className="lg:hidden">{shortText}</span>
        </p>
        <Buttons />
    </>
);

const imageVisibility = ["", "hidden sm:block", "hidden md:block"];

export default function Intro() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style grid grid-cols-24">
                <div className="col-span-1 hidden md:flex items-end ">
                    <IconArrowBoldDownFill32 className="rounded-xl" />
                </div>
                <div className="col-span-24 sm:col-span-8 col-start-0 md:col-start-7 flex flex-col justify-between">
                    <h2 className="heading-primary max-w-[18ch] mb-12 md:mb-0">
                        Omtanke i kvadrat
                    </h2>
                    <div className="hidden sm:flex flex-col">
                        <Body />
                    </div>
                </div>
                <div className="col-span-24 sm:col-span-12 sm:col-start-13 md:col-span-6 lg:col-span-4 md:col-start-19 lg:col-start-21 mb-12 md:mb-0">
                    <div className="flex flex-col gap-base">
                        {[img1, img2, img3].map((img, i) => (
                            <div key={i} className={`relative aspect-5/3 ${imageVisibility[i]}`}>
                                <Image src={img} alt="" fill className="object-cover rounded-xl" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sm:hidden flex-col col-span-24 mt-base">
                    <Body />
                </div>
            </div>
        </section>
    );
}
