import ContentBlock from "./ContentBlock";
import Image from "next/image";
import livingRoom from "@/public/whyus/Interior_1_002.jpg";

export default function HowItWorks() {
    return (
        <section className="section-x-p">
            <div className="inner-section-style flex flex-col gap-xl">
                <div className="w-full relative">
                    <Image src={livingRoom} alt="" className="w-full object-contain rounded-md" />
                </div>
                <div className="grid grid-cols-10 grid-rows-6 h-[50vh]">
                    <div className="col-start-1 col-span-2 row-start-1">
                        <p className="heading-primary">Varför Välja Oss?</p>
                    </div>
                    <div className="col-start-3 col-span-2 row-start-4">
                        <ContentBlock
                            title="Din egen mäklare"
                            number="01"
                            text="Du får en dedikerad mäklare som känner din affär utan och innan. Inget vidarebefordras, inget faller mellan stolarna."
                        />
                    </div>
                    <div className="col-start-5 col-span-2 row-start-4">
                        <ContentBlock
                            title="Alltid tillgängliga"
                            number="02"
                            text="Frågor dyker upp på kvällar och helger. Vi svarar när det passar dig, inte bara under kontorstid."
                        />
                    </div>
                    <div className="col-start-7 col-span-2 row-start-4">
                        <ContentBlock
                            title="Lokal kännedom på djupet"
                            number="03"
                            text="Vi vet vad grannarna betalt, vilket håll solen faller och vilken skola som ligger närmast. Den kunskapen förhandlar vi med."
                        />
                    </div>
                    <div className="col-start-9 col-span-2 row-start-4">
                        {" "}
                        <ContentBlock
                            title="Transparent process"
                            number="04"
                            text="Vi förklarar varje steg, varje avgift och varje beslut i förväg. Du ska aldrig behöva gissa vad som händer härnäst."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
