/*interface HistoryProps {
	
}*/

import HistoryBlock from "./HistoryBlock";

export default function History() {
    return (
        <section className="no-section-p my-48">
            <div className="grid grid-cols-10">
                <div>
                    <p className="eyebrow">Vår historia</p>
                </div>
                <div className="col-span-4 col-start-2 flex flex-col justify-between">
                    <p className="heading-primary">Från Reliwe/Bjerbo till Lewa</p>
                    <p className="max-w-prose">
                        Lewa Bostad grundades som en avknoppning ur Reliwe och Bjerbo — två
                        etablerade aktörer inom byggsektorn. Med ett tydligt fokus på boendekvalitet
                        och hållbarhet tog vi steget att skapa något eget.
                    </p>
                </div>
                <div className="col-start-7 col-span-3 flex flex-col">
                    <HistoryBlock
                        year="2010"
                        title="Reliwe grundas"
                        text="Startpunkten för det som skulle bli Lewa."
                    />
                    <HistoryBlock
                        year="2020"
                        title="Bjerbo-samarbetet inleds"
                        text="Kompetenser slås samman — hantverk möter projektutveckling."
                    />
                    <HistoryBlock
                        year="2026"
                        title="Lewa Bostad bildas"
                        text="Med erfarenheten i ryggen och en klar vision: att bygga hem vi själva skulle vilja bo i."
                        isLast={true}
                    />
                </div>
            </div>
        </section>
    );
}
