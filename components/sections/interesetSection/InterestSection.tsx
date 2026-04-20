import InterestForm from "./InterestForm";

export default function InterestSection() {
    return (
        <section className="no-section-p inner-section-h flex flex-col justify-center">
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <p className="eyebrow-light">Intresseanmälan</p>
                </div>

                <div className="col-span-6 max-w-5xl flex flex-col gap-xl">
                    <p className="heading-primary">Hör Av Dig</p>
                    <p className="max-w-prose">
                        Oavsett om du funderar på att köpa, sälja eller bara vill veta mer om
                        marknaden — fyll i formuläret så återkommer vi inom kort.
                    </p>

                    <div className="flex justify-center w-full">
                        <InterestForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
