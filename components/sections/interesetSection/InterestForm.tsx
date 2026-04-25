/*interface InterestFormProps {
	
}*/

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import InputDark from "@/components/ui/inputs/dark/InputDark";
import TextAreaDark from "@/components/ui/inputs/dark/TextAreaDark";

export default function InterestForm() {
    return (
        <form className="w-full flex flex-col gap-lg">
            <div className="flex flex-row gap-lg">
                <InputDark placeholder="Förnamn" />
                <InputDark placeholder="Efternamn" />
            </div>
            <div className="flex flex-row gap-lg">
                <InputDark placeholder="E-postadress" />
                <InputDark placeholder="Telefonnummer" />
            </div>
            <TextAreaDark placeholder="Övriga önskemål" />
            <div className="border-b border-border" />
            <p className="text-sm text-border">
                Genom att skicka in formuläret godkänner du vår integritetspolicy.
            </p>
            <PrimaryButton />
        </form>
    );
}
