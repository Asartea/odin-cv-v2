import { ProjectDataSection } from "../../App";

type ProjectPreviewProps = {
    projects: ProjectDataSection;
};

function ProjectPreview({ projects }: ProjectPreviewProps) {
    return (
        <div className="project-preview">
            <h2>Projects</h2>
            {Object.entries(projects).map(
                ([key, project]) =>
                    project.title && (
                        <div key={key} className="project">
                            <h3>{project.title}</h3>
                            <p>
                                {project.github && (
                                    <a href={project.github} target="_blank">
                                        Github
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank">
                                        Demo
                                    </a>
                                )}
                            </p>
                            {project.description && (
                                <p>{project.description}</p>
                            )}
                        </div>
                    ),
            )}
        </div>
    );
}

export default ProjectPreview;
