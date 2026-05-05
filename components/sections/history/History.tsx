/*interface HistoryProps {
	
}*/

import HistoryBlock from "./HistoryBlock";
import { IconFlag3Fill32, IconHouseHeartFill32, IconHandshakeFill32 } from "nucleo-core-fill-32";
import { cn } from "@/lib/utils";

export default function History() {
    return (
        <section className="no-section-p my-24">
            <div className="inner-section-p grid grid-cols-24">
                <div className="col-span-24 sm:col-span-6">
                    <p className="eyebrow-light text-surface">Vår historia</p>
                </div>
                <div
                    className={cn(
                        "flex flex-col justify-between mb-24 lg:mb-0",
                        "col-span-24 md:col-span-14 md:col-start-7 lg:col-span-9 lg:col-start-7",
                    )}
                >
                    <p className="heading-primary">Reliwe/Bjerbo till Lewa</p>
                    <p className="max-w-prose">
                        Lewa Bostad grundades som en avknoppning ur Reliwe och Bjerbo — två
                        etablerade aktörer inom byggsektorn. Med ett tydligt fokus på boendekvalitet
                        och hållbarhet tog vi steget att skapa något eget.
                    </p>
                </div>
                <div className="col-span-24 md:col-start-7 lg:col-span-8 lg:col-start-18">
                    <HistoryBlock
                        year="2010"
                        title="Reliwe grundas"
                        text="Startpunkten för det som skulle bli Lewa."
                        icon={<IconFlag3Fill32 className="w-7 h-7" />}
                    />
                    <HistoryBlock
                        year="2020"
                        title="Bjerbo-samarbetet inleds"
                        text="Kompetenser slås samman — hantverk möter projektutveckling."
                        icon={<IconHandshakeFill32 className="w-7 h-7" />}
                    />
                    <HistoryBlock
                        year="2026"
                        title="Lewa Bostad bildas"
                        text="Med erfarenheten i ryggen och en klar vision."
                        icon={<IconHouseHeartFill32 className="w-7 h-7" />}
                        isLast={true}
                    />
                </div>
            </div>
        </section>
    );
}
