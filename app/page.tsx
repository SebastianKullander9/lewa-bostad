import CallToAbout from "@/components/sections/callToAction/about/CallToAbout";
import CallToProjects from "@/components/sections/callToAction/projects/CallToProjects";
import Hero from "@/components/sections/hero/Hero";
import InterestSection from "@/components/sections/interesetSection/InterestSection";
import Intro from "@/components/sections/intro/Intro";
import KeyFigures from "@/components/sections/keyFigures/KeyFigures";
import WhyUs from "@/components/sections/whyUs/WhyUs";
import Footer from "@/components/ui/footer/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <CallToProjects />
            <KeyFigures />
            <CallToAbout />
            <WhyUs />
            <InterestSection />
            <Footer />
        </>
    );
}
