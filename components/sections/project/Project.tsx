import Image from "next/image";
import img1 from "@/public/projects/kummelnashojden/Interior_3_002.jpg";
import img2 from "@/public/projects/kummelnashojden/Interior_7_002.jpg";
import img3 from "@/public/projects/kummelnashojden/Interior_5_003.jpg";
import img4 from "@/public/projects/kummelnashojden/Exterior_3_Wood_002.jpg";
import img5 from "@/public/projects/kummelnashojden/Exterior_1_Wood_002.jpg";
import ObjInfo from "./objInfo";
import { Flag, CalendarDays, House, HouseHeart, Grid2x2, Leaf, Eye } from "lucide-react";
import ProjectMap from "./ProjectMap";

export default function Project() {
    return (
        <article className="section-x-p">
            <div className="inner-section-style flex flex-col gap-lg">
                <div className="flex flex-col gap-xl mb-xl">
                    <p className="heading-primary">Kummelnäshöjden</p>
                    <p className="text-lg font-bo max-w-prose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula
                        feugiat ligula. Cras non volutpat mauris. Aliquam consectetur faucibus
                        euismod. Aliquam vel feugiat urna. Nullam condimentum, nunc sit amet
                        volutpat sodales, mauris leo ultricies mi, eu accumsan elit erat bibendum
                        nisl.
                    </p>
                </div>
                <div className="w-full grid grid-cols-10 gap-lg">
                    <div className="col-span-10 flex flex-row gap-xs items-center justify-end">
                        <Eye size={18} />
                        <p>Visa alla bilder</p>
                    </div>
                    <div className="col-span-6">
                        <Image src={img1} alt="" className="object-contain rounded-md" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-lg h-full">
                        <div className="h-full relative">
                            <Image src={img2} fill alt="" className="object-cover rounded-md" />
                        </div>
                        <div className="relative h-full">
                            <Image src={img5} fill alt="" className="object-cover rounded-md" />
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-lg h-full">
                        <div className="h-full relative">
                            <Image src={img4} fill alt="" className="object-cover rounded-md" />
                        </div>
                        <div className="relative h-full">
                            <Image src={img3} fill alt="" className="object-cover rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-10 gap-lg">
                    <div className="col-span-6 flex flex-col justify-around">
                        <p className="text-4xl my-xl">Objektinfo</p>
                        <div className="grid grid-cols-3 gap-md">
                            <ObjInfo title="Byggstart" value="2027" Icon={Flag} />
                            <ObjInfo title="Inflyttning" value="2028" Icon={CalendarDays} />
                            <ObjInfo title="Antal bostäder" value="4" Icon={House} />
                            <ObjInfo title="Antal rum" value="5" Icon={HouseHeart} />
                            <ObjInfo title="Storlek" value="80kvm" Icon={Grid2x2} />
                            <ObjInfo title="Energiklass" value="A" Icon={Leaf} />
                        </div>
                        <p className="text-4xl my-xl">Om projektet</p>
                        <p className="text-lg max-w-prose leading-relaxed">
                            Kummelnäshöjden är ett exklusivt bostadsprojekt beläget på Lidingö, med
                            enastående utsikt över Stockholms skärgård. Husen är ritade av Wingårdhs
                            arkitektkontor och uppförs i massivt trä med en tidlös, nordisk estetik.
                        </p>
                        <p className="text-lg max-w-prose leading-relaxed">
                            Varje bostad är unikt utformad med generösa takhöjder, stora
                            fönsterpartier och privata uteplats. Materialen är noggrant utvalda för
                            att skapa en varm och hållbar hemmiljö som håller i generationer.
                        </p>
                        <div className="w-full flex flex-col gap-md">
                            <p className="text-4xl">Läge</p>
                            <div className="flex gap-sm flex-wrap">
                                {[
                                    "8 min till tunnelbana",
                                    "15 min till city",
                                    "Natur direkt utanför",
                                    "Lidingö centrum 5 min",
                                    "Skolor i närområdet",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 rounded-full border text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-md">
                            <p className="text-4xl">Hållbarhet</p>
                            <div className="flex gap-sm flex-wrap">
                                {[
                                    "Massivt KL-trä",
                                    "Bergvärme",
                                    "Solceller på taket",
                                    "Energiklass A",
                                    "Laddstolpe ingår",
                                    "Grönt tak",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 rounded-full border text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 col-start-7">
                        <ProjectMap lat={59.36} lng={18.15} />
                    </div>
                </div>
            </div>
        </article>
    );
}

/*
        <p className="text-4xl">Om projektet</p>
        <p className="text-muted-foreground leading-relaxed">
            Kummelnäshöjden är ett exklusivt bostadsprojekt beläget på Lidingö, med
            enastående utsikt över Stockholms skärgård. Husen är ritade av Wingårdhs
            arkitektkontor och uppförs i massivt trä med en tidlös, nordisk estetik.
        </p>
        <p className="text-muted-foreground leading-relaxed">
            Varje bostad är unikt utformad med generösa takhöjder, stora fönsterpartier
            och privata uteplats. Materialen är noggrant utvalda för att skapa en varm
            och hållbar hemmiljö som håller i generationer.
        </p>
*/
