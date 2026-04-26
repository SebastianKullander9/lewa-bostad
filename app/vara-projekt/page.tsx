import Footer from "@/components/sections/footer/Footer";
import ProjectRenderer from "@/components/sections/project/Project/ProjectRenderer";
import { projectData } from "@/components/sections/project/data";

export default function OurProjectsPage() {
    return (
        <>
            <ProjectRenderer projects={projectData} />
        </>
    );
}
/*<Footer />*/
