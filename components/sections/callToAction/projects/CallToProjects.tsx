import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import glansbaggen from "@/public/callToProjects/glansbaggen.webp";
import kummelnashojden from "@/public/callToProjects/kummelnashojden.webp";

import ProjectImage from "./ProjectImage";

interface CallToProjectsProps {
    title?: string;
    text?: string;
}

export default function CallToProjects({ title, text }: CallToProjectsProps) {
    return (
        <section className="section-x-p section-mt">
            <div className="inner-section-style grid grid-cols-12 gap-large">
                <div className="col-span-12 md:col-span-12 ">
                    <h2 className="heading-primary mb-base">{title ? title : "Våra Projekt"}</h2>
                    <p className="max-w-prose text-large leading-relaxed">
                        {text
                            ? text
                            : "Vi utvecklar och förvaltar småhus och parhus för livet – oavsett om du sök ett ägt eller hyrt boende. Våra projekt finns i attraktiva tillväxtområden och utformas med fokus på kvalitet, hållbarhet och ett långsiktigt boende."}
                    </p>
                </div>
                <div className="col-span-12 md:col-span-6 relative">
                    <ProjectImage
                        title="Glansbaggen"
                        location="Tumba"
                        image={glansbaggen}
                        status="Planerad"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 relative">
                    <ProjectImage
                        title="Kummelnäshöjden"
                        location="Nacka"
                        image={kummelnashojden}
                        status="Genomförd"
                    />
                </div>
                <div></div>
            </div>
        </section>
    );
}
