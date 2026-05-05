/*interface AboutUsPageProps {
	
}*/

import About from "@/components/sections/about/About";
import AboutEstates from "@/components/sections/aboutEstates/AboutEstates";
import Footer from "@/components/ui/footer/Footer";
import History from "@/components/sections/history/History";

export default function AboutUsPage() {
    return (
        <>
            <About />
            <History />
            <AboutEstates />
            <Footer />
        </>
    );
}
