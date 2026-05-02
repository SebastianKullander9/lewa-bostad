import KeyFigure from "./KeyFigure";

export default function KeyFigures() {
    return (
        <section className="no-section-p lg:inner-section-h my-24 flex flex-col justify-center">
            <div className="grid grid-cols-12 inner-section-p">
                <div className="col-span-12 md:col-span-2 mb-base">
                    <p className="eyebrow-light text-surface">Våra nyckeltal</p>
                </div>
                <div className="col-span-12 md:col-span-8 md:col-start-4 mb-8 lg:mb-24 xl:mb-36">
                    <p className="text-extralarge">
                        Vi är ett nytt bostadsföretag med etablerad grund. Koncernens nyckeltal
                        bygger på historik från de två bolag som nu bildar Lewa Bostad.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-8 md:col-start-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-base">
                    <KeyFigure
                        value="3 300"
                        suffix="St"
                        title="Pågående projekt runt om i landet"
                    />
                    <KeyFigure value="775" suffix="St" title="Färdigställda under året" />
                    <KeyFigure value="130" suffix="MSEK" title="Resultat 2024" />
                    <KeyFigure value="76" suffix="%" title="Soliditet 2024" />
                </div>
            </div>
        </section>
    );
}

/*



*/
