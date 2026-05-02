import CallToProjects from "@/components/sections/callToAction/projects/CallToProjects";
import Intro from "@/components/sections/intro/Intro";
import Hero from "@/components/sections/hero/Hero";
import KeyFigures from "@/components/sections/keyFigures/KeyFigures";
import HowItWorks from "@/components/sections/howItWorks/HowItWorks";
import InterestForm from "@/components/sections/interesetSection/InterestSection";
import Footer from "@/components/sections/footer/Footer";
import CallToAbout from "@/components/sections/callToAction/about/CallToAbout";

export default function Home() {
    return (
        <div className="">
            <Intro />
            <Hero />
            <CallToProjects />
            <KeyFigures />
        </div>
    );
}

/*



<CallToAbout />
<InterestForm />
<HowItWorks />
<Footer />
*/
