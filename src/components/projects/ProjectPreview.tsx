import { ProjectDataSection } from "../../App";

type ProjectPreviewProps = {
    projects: ProjectDataSection;
};

function ProjectPreview({ projects }: ProjectPreviewProps) {
    return (
        <div className="project-preview preview">
            <h2>Projects</h2>
            {Object.entries(projects).map(
                ([key, project]) =>
                    project.title && (
                        <div key={key} className="project">
                            <div className="project-header header">
                                <div className="title">
                                    <h3>{project.title}</h3>
                                </div>
                                <div className="links">
                                    <p>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                            >
                                                Github
                                            </a>
                                        )}{" "}
                                        |{" "}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                            >
                                                Demo
                                            </a>
                                        )}
                                    </p>
                                </div>
                            </div>
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
