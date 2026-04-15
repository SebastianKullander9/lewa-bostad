import Image from "next/image";
import owner from "@/public/about/temporary-owner.jpg";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

/*interface AboutProps {
	
}*/

export default function About() {
    return (
        <section className="section-x-p mb-24">
            <div className="bg-surface w-full h-[50vh] rounded-lg p-lg text-background grid grid-cols-12">
                <div className="col-span-3">
                    <p>OM OSS</p>
                </div>
                <div className="flex-1 flex flex-col justify-between col-span-5">
                    <p className="text-4xl italic max-w-[35ch]">
                        &rdquo;Jag har alltid trott att ett hem ska kännas som något byggt med
                        omsorg, inte producerat på löpande band. Trä andas, det lever — precis som
                        de familjer som flyttar in.&rdquo; - Erik Andersson
                    </p>
                    <div className="flex flex-col gap-xl">
                        <p className="max-w-prose">
                            Vi grundades med övertygelsen att fler människor förtjänar ett hem byggt
                            för att hålla — inte bara i år, utan i generationer. Trä är vårt
                            material, hållbarhet är vårt löfte. Erik Lindqvist och Anna Bergström
                            byggde sitt första hus tillsammans 2003, med egna händer och ett öga för
                            detaljer som fortfarande präglar varje projekt vi tar oss an. Du pratar
                            alltid med samma person — från första visning till dagen du får dina
                            nycklar. Inga callcenter, inga vidarebefordringar. Bara en kontakt som
                            känner ditt hem lika väl som du gör.
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
                        className="object-contain w-auto rounded-lg"
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
