import CallToProjects from "@/components/sections/callToAction/projects/CallToProjects";
import Intro from "@/components/sections/intro/Intro";
import Hero from "@/components/sections/hero/Hero";
import KeyFigures from "@/components/sections/keyFigures/KeyFigures";
import HowItWorks from "@/components/sections/howItWorks/HowItWorks";
import Footer from "@/components/sections/footer/Footer";
import CallToAbout from "@/components/sections/callToAction/about/CallToAbout";
import InterestSection from "@/components/sections/interesetSection/InterestSection";

export default function Home() {
    return (
        <div className="">
            <Intro />
            <Hero />
            <CallToProjects />
            <KeyFigures />
            <CallToAbout />
            <HowItWorks />
            <InterestSection />
            <Footer />
        </div>
    );
}
