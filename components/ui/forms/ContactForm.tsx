/*interface ContactFormProps {
	
}*/

import PrimaryButton from "../buttons/PrimaryButton";
import InputDark from "../inputs/dark/InputDark";
import TextAreaDark from "../inputs/dark/TextAreaDark";

export default function ContactForm() {
    return (
        <form className="flex flex-col gap-md bg-white inner-section-p rounded-xl">
            <p className="heading-secondary">Skicka ett meddelande</p>
            <p>Fyll i formuläret så hör vi av oss.</p>
            <div className="flex flex-col gap-base">
                <div className="flex flex-col gap-base">
                    <InputDark placeholder="namn*" />
                    <InputDark placeholder="Email*" />
                    <InputDark placeholder="Telefon" />
                </div>
                <TextAreaDark placeholder="Skriv någonting här..." rows={7} />
            </div>
            <div className="inline-block">
                <PrimaryButton label="Skicka" />
            </div>
        </form>
    );
}
