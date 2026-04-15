import KeyFigure from "./KeyFigure";

export default function KeyFigures() {
    return (
        <section className="section-x-p h-[50vh] flex flex-col justify-center">
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <p className="text-lg font-light">Koncernens nyckeltal</p>
                </div>
                <div className="col-span-6 col-start-4">
                    <div className="mb-36">
                        <h2 className="text-6xl mb-lg font-normal tracking-wider">
                            Starka resultat, hållbar tillväxt
                        </h2>
                        <p className="max-w-prose">
                            Vi bygger framtidens boenden med fokus på kvalitet och långsiktig
                            hållbarhet. Våra nyckeltal visar en stabil tillväxt och ett starkt 2024.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
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
            </div>
        </section>
    );
}
