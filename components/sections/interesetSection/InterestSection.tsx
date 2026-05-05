import InterestForm from "./InterestForm";

export default function InterestSection() {
    return (
        <section className="section-x-p section-mt">
            <div className="inner-section-p inner-section-style grid grid-cols-12 py-24 md:gap-y-24 gap-base">
                <div className="col-span-12 md:col-span-1">
                    <p className="eyebrow-light text-background">Intresseanmälan</p>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-4">
                    <p className="text-extralarge font-medium">
                        Ser du dig själv här? Anmäl ditt intresse så hör vi av oss när något passar
                        dig. Ingen bindning — bara ett första steg mot något som kanske blir ditt
                        nästa hem.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-4 mt-36 md:mt-0">
                    <InterestForm />
                </div>
            </div>
        </section>
    );
}
