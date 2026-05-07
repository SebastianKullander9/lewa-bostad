import Image from "next/image";
import glansbaggen from "@/public/callToProjects/glansbaggen.webp";
import kummelnashojden from "@/public/callToProjects/kummelnashojden.webp";
import StatusBadge from "./StatusBadge";

export default function CallToProjects() {
    return (
        <section className="section-x-p section-mt">
            <div className="inner-section-style grid grid-cols-12 gap-large">
                <div className="col-span-12 md:col-span-12">
                    <h2 className="heading-primary mb-base">Våra Projekt</h2>
                    <p className="max-w-prose text-large leading-relaxed">
                        Vi utvecklar och förvaltar småhus och parhus för livet – oavsett om du söker
                        ett ägt eller hyrt boende. Våra projekt finns i attraktiva tillväxtområden
                        och utformas med fokus på kvalitet, hållbarhet och ett långsiktigt boende.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-6 relative">
                    <div className="rounded-xl overflow-hidden mb-base">
                        <Image
                            src={glansbaggen}
                            alt=""
                            className="object-contain block hover:scale-103 transform transition-all duration-350"
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <StatusBadge label="planerad" />
                    <div>
                        <p className="text-large font-medium">Glansbaggen, Tumba</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 relative">
                    <div className="rounded-xl overflow-hidden mb-base">
                        <Image
                            src={kummelnashojden}
                            alt=""
                            className="object-contain block hover:scale-103 transform transition-all duration-350"
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <StatusBadge label="genomförd" />
                    <div>
                        <p className="text-large font-medium">Kummelnäshöjden, Nacka</p>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
}
