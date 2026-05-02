import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import interior2 from "@/public/projects/kummelnashojden/Interior_2_002.jpg";
import Image from "next/image";
import { IconArrowBoldDownFill32 } from "nucleo-core-fill-32";

const Body = () => (
    <>
        <p className="max-w-prose text-large">
            Lewa Bostad är ett familjeägt bostadsbolag med rötterna i Mellansverige. Vi skapar
            noggrant utformade hem med hållbara material och ett hantverk som syns i varje detalj.
        </p>
    </>
);

export default function About() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style grid grid-cols-24">
                <div className="col-span-1 hidden md:flex items-end ">
                    <IconArrowBoldDownFill32 className="rounded-xl" />
                </div>
                <div className="col-span-24 md:col-span-8 col-start-0 md:col-start-7 flex flex-col justify-between">
                    <p className="heading-primary mb-12 md:mb-0">
                        Vi bygger hem du faktiskt vill bo i
                    </p>
                    <div className="hidden md:block">
                        <Body />
                    </div>
                </div>
                <div className="col-span-24  md:col-span-8 lg:col-span-7 md:col-start-17 lg:col-start-18 mb-12 md:mb-0">
                    <Image
                        src={interior2}
                        alt=""
                        width={2000}
                        height={2000}
                        className="object-cover w-auto rounded-xl aspect-square"
                    />
                </div>
                <div className="col-span-24 md:hidden">
                    <Body />
                    <div className="col-span-24 flex justify-end">
                        <IconArrowBoldDownFill32 className="rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/*
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
*/
