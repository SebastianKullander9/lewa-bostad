/*interface ContactFormProps {
	
}*/

import PrimaryButton from "../buttons/PrimaryButton";
import InputLight from "../inputs/light/InputLight";
import TextAreaLight from "../inputs/light/TextAreaLight";

export default function ContactForm() {
    return (
        <form className="flex flex-col gap-md">
            <p className="text-xl">Skicka ett meddelande</p>
            <p>Fyll i formuläret så hör vi av oss.</p>
            <div className="flex flex-col gap-md">
                <div className="flex flex-row gap-md">
                    <InputLight placeholder="namn" />
                    <InputLight placeholder="Email" />
                </div>
                <TextAreaLight placeholder="Skriv någonting här..." rows={7} />
            </div>
            <div className="inline-block">
                <PrimaryButton />
            </div>
        </form>
    );
}
