import CallToProjects from "@/components/sections/callToAction/projects/CallToProjects";
import Intro from "@/components/sections/intro/Intro";
import Hero from "@/components/sections/hero/Hero";
import KeyFigures from "@/components/sections/keyFigures/KeyFigures";
import About from "@/components/sections/about/About";
import HowItWorks from "@/components/sections/howItWorks/HowItWorks";
import InterestForm from "@/components/sections/interesetSection/InterestSection";
import Footer from "@/components/sections/footer/Footer";

export default function Home() {
    return (
        <div className="">
            <Intro />
            <Hero />
            <CallToProjects />
            <KeyFigures />
            <About />
            <InterestForm />
            <HowItWorks />
            <Footer />
        </div>
    );
}
