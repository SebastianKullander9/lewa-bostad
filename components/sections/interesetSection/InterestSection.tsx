import InterestForm from "./InterestForm";

export default function InterestSection() {
    return (
        <section className="section-x-p section-mt">
            <div className="inner-section-p inner-section-style grid grid-cols-12 py-24 gap-y-24">
                <div className="col-span-1">
                    <p className="eyebrow-light text-background">Intresseanmälan</p>
                </div>
                <div className="col-span-6 col-start-4">
                    <p className="text-extralarge font-medium">
                        Ser du dig själv här? Anmäl ditt intresse så hör vi av oss när något passar
                        dig. Ingen bindning — bara ett första steg mot något som kanske blir ditt
                        nästa hem.
                    </p>
                </div>
                <div className="col-span-6 col-start-4">
                    <InterestForm />
                </div>
            </div>
        </section>
    );
}
