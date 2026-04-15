/*interface InterestFormProps {
	
}*/

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import Input from "@/components/ui/inputs/Input";
import TextArea from "@/components/ui/inputs/TextArea";

export default function InterestForm() {
    return (
        <form className="w-full flex flex-col gap-lg">
            <div className="flex flex-row gap-lg">
                <Input placeholder="Förnamn" />
                <Input placeholder="Efternamn" />
            </div>
            <div className="flex flex-row gap-lg">
                <Input placeholder="E-postadress" />
                <Input placeholder="Telefonnummer" />
            </div>
            <TextArea placeholder="Övriga önskemål" />
            <div className="border-b border-border" />
            <p className="text-sm text-border">
                Genom att skicka in formuläret godkänner du vår integritetspolicy.
            </p>
            <PrimaryButton />
        </form>
    );
}
