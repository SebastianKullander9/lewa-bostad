import Footer from "@/components/sections/footer/Footer";
import ProjectRenderer from "@/components/sections/project/Project/ProjectRenderer";
import { projectData } from "@/components/sections/project/data";
import InterestSection from "@/components/sections/interesetSection/InterestSection";

export default function OurProjectsPage() {
    return (
        <>
            <ProjectRenderer projects={projectData} />
            <InterestSection />
            <Footer />
        </>
    );
}
