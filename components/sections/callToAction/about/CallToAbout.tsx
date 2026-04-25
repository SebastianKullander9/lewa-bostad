import Image from "next/image";
import owner from "@/public/about/temporary-owner.jpg";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

/*interface AboutProps {
	
}*/

export default function CallToAbout() {
    return (
        <section className="section-x-p">
            <div className="inner-section-h inner-section-style grid grid-cols-12">
                <div className="col-span-3">
                    <p className="eyebrow">OM OSS</p>
                </div>
                <div className="flex-1 flex flex-col justify-between col-span-5">
                    <p className="quote max-w-[35ch]">
                        &rdquo;Trä andas, det lever, precis som de familjer som flyttar in.&rdquo;
                    </p>
                    <div className="flex flex-col gap-xl">
                        <p className="max-w-prose text-base">
                            Vi grundades med övertygelsen att fler människor förtjänar ett hem byggt
                            för att hålla — inte bara i år, utan i generationer. Trä är vårt
                            material, hållbarhet är vårt löfte. Erik Lindqvist och Anna Bergström
                            byggde sitt första hus tillsammans 2003, med egna händer och ett öga för
                            detaljer som fortfarande präglar varje projekt vi tar oss an. Du pratar
                            alltid med samma person.
                        </p>
                        <div>
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
                <div className="relative h-full overflow-hidden col-span-4 flex justify-end">
                    <Image
                        src={owner}
                        alt=""
                        width={1000}
                        height={1000}
                        className="object-cover w-auto rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

/*
                    <div className="w-full flex justify-end">
                        <p>OM OSS</p>
                    </div>

                    
                    <div className="w-full flex flex-col items-end">

                    </div>
*/
