import Image from "next/image";
import owner from "@/public/about/temporary-owner.jpg";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import { Link } from "next-view-transitions";

export default function CallToAbout() {
    return (
        <section className="no-section-p">
            <div className="inner-section-p grid grid-cols-12 border-t border-border py-24 gap-base md:gap-y-24">
                <div className="col-span-12 md:col-span-3 md:row-start-1">
                    <p className="eyebrow-light text-surface">Om oss</p>
                </div>
                <div className="col-span-12 md:col-span-7 md:col-start-4 md:row-start-1 mb-12 md:mb-0">
                    <p className="text-extralarge italic">
                        &rdquo;Lewa Bostad skapar hem att trivas i – designade för vardagens små
                        stunder och framtidens stora ögonblick.&rdquo;
                    </p>
                </div>
                <div className="col-span-8 md:col-span-3 lg:col-span-2 md:row-start-2">
                    <Image
                        src={owner}
                        alt=""
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full rounded-xl"
                    />
                </div>
                <div className="col-span-12 max-w-prose md:col-span-7 md:col-start-4 md:row-start-2 flex flex-col justify-between gap-base">
                    <p className="max-w-prose text-large">
                        Vi grundades med övertygelsen att fler människor förtjänar ett hem byggt för
                        att hålla — inte bara i år, utan i generationer. Trä är vårt material,
                        hållbarhet är vårt löfte. Erik Lindqvist och Anna Bergström byggde sitt
                        första hus tillsammans 2003, med egna händer och ett öga för detaljer som
                        fortfarande präglar varje projekt vi tar oss an. Du pratar alltid med samma
                        person.
                    </p>
                    <div className="inline-flex flex-row gap-base">
                        <Link href="/om-oss" className="min-w-30">
                            <PrimaryButton label="Om oss" noBackground={true} />
                        </Link>
                        <Link href="/kontakt" className="min-w-30">
                            <SecondaryButton label="Kontakta oss" noBackground={true} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/*

*/
