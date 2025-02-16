import { ProjectDataSection } from "../../App";
import PrettyPrintDescription from "../PrettyPrintDescription";

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
                                    <h3>{project.title} </h3>
                                    <p>{project.skills}</p>
                                </div>
                                <div className="links">
                                    <p>
                                        {project.github && (
                                            <a
                                                href={
                                                    project.github.startsWith(
                                                        "http",
                                                    )
                                                        ? project.github
                                                        : `https://${project.github}`
                                                }
                                                target="_blank"
                                            >
                                                Github
                                            </a>
                                        )}{" "}
                                        |{" "}
                                        {project.demo && (
                                            <a
                                                href={
                                                    project.demo.startsWith(
                                                        "http",
                                                    )
                                                        ? project.demo
                                                        : `https://${project.demo}`
                                                }
                                                target="_blank"
                                            >
                                                Demo
                                            </a>
                                        )}
                                    </p>
                                </div>
                            </div>
                            {project.description && (
                                <PrettyPrintDescription
                                    description={project.description}
                                />
                            )}
                        </div>
                    ),
            )}
        </div>
    );
}

export default ProjectPreview;
