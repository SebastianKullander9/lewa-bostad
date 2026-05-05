import CallToProjects from "@/components/sections/callToAction/projects/CallToProjects";
import Intro from "@/components/sections/intro/Intro";
import Hero from "@/components/sections/hero/Hero";
import KeyFigures from "@/components/sections/keyFigures/KeyFigures";
import WhyUs from "@/components/sections/whyUs/WhyUs";
import Footer from "@/components/ui/footer/Footer";
import CallToAbout from "@/components/sections/callToAction/about/CallToAbout";
import InterestSection from "@/components/sections/interesetSection/InterestSection";

export default function Home() {
    return (
        <>
            <Intro />
            <Hero />
            <CallToProjects />
            <KeyFigures />
            <CallToAbout />
            <WhyUs />
            <InterestSection />
            <Footer />
        </>
    );
}
