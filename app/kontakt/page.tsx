/*interface ContactProps {
	
}*/

import CallToProjects from "@/components/sections/callToAction/projects/CallToProjects";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/ui/footer/Footer";

export default function ContactPage() {
    return (
        <>
            <Contact />
            <CallToProjects
                title="Medans du väntar"
                text="Vi hör av oss så snart vi kan. Medan du väntar — ta en titt på våra projekt. Kanske är ditt nästa hem redan på gång."
            />
            <Footer />
        </>
    );
}
