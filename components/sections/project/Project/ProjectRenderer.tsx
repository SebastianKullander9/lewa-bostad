import { ProjectType } from "@/types/project.type";
import Project from "./Project";

interface ProjectRendererProps {
    projects: ProjectType[];
}

export default function ProjectRenderer({ projects }: ProjectRendererProps) {
    return (
        <div className="flex flex-col gap-md">
            {projects.map((project, index) => (
                <Project key={(project.title, index)} project={project} />
            ))}
        </div>
    );
}
