import Image from "next/image";
import glansbaggen from "@/public/callToProjects/glansbaggen.webp";
import kummelnashojden from "@/public/callToProjects/kummelnashojden.webp";

export default function CallToProjects() {
    return (
        <section className="min-h-dvh section-x-p flex items-center">
            <div className="bg-sunken w-full text-text-primary p-lg rounded-md">
                <h2 className="text-5xl font-extrabold uppercase mb-lg">Projekt</h2>
                <p className="max-w-prose mb-md text-base font-base">
                    Vi utvecklar och förvaltar småhus och parhus för livet – oavsett om du söker ett
                    ägt eller hyrt boende. Våra projekt finns i attraktiva tillväxtområden och
                    utformas med fokus på kvalitet, hållbarhet och ett långsiktigt boende.
                </p>
                <div className="flex flex-row gap-lg">
                    <div className="w-1/2 relative">
                        <div className="rounded-md overflow-hidden mb-md">
                            <Image
                                src={glansbaggen}
                                alt=""
                                className="object-contain block hover:scale-103 transform transition-all duration-350"
                            />
                        </div>
                        <p className="absolute text-text-secondary py-xs px-lg rounded-full bg-surface top-4 right-4">
                            Planerad
                        </p>
                        <p className="text-xl font-bold tracking-widest uppercase">
                            Glansbaggen, Tumba
                        </p>
                    </div>
                    <div className="w-1/2 relative">
                        <div className="rounded-md overflow-hidden mb-md">
                            <Image
                                src={kummelnashojden}
                                alt=""
                                className="object-contain block hover:scale-103 transform transition-all duration-350"
                            />
                        </div>
                        <p className="absolute text-text-secondary py-xs px-lg rounded-full bg-surface top-4 right-4">
                            Genomförd
                        </p>
                        <p className="text-xl font-bold tracking-widest uppercase">
                            Kummelnäshöjden, Nacka
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
