import ContentBlock from "./ContentBlock";

export default function HowItWorks() {
    return (
        <section className="section-x-p">
            <div className="bg-surface text-background p-lg rounded-lg">
                <p className="text-6xl">Varför Välja Oss?</p>
                <div className="flex flex-row">
                    <ContentBlock
                        title="Din egen mäklare — från start till slut"
                        text="Du får en dedikerad mäklare som känner din affär utan och innan. Inget vidarebefordras, inget faller mellan stolarna."
                    />
                    <ContentBlock
                        title="Alltid tillgängliga — på dina villkor"
                        text="Frågor dyker upp på kvällar och helger. Vi svarar när det passar dig, inte bara under kontorstid."
                    />
                    <ContentBlock
                        title="Lokal kännedom på djupet"
                        text="Vi vet vad grannarna betalt, vilket håll solen faller och vilken skola som ligger närmast. Den kunskapen förhandlar vi med."
                    />
                    <ContentBlock
                        title="Transparent process — inga överraskningar"
                        text="Vi förklarar varje steg, varje avgift och varje beslut i förväg. Du ska aldrig behöva gissa vad som händer härnäst."
                    />
                </div>
            </div>
        </section>
    );
}
