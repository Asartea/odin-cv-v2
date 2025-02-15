import ProjectForm from "./ProjectForm";
import Button from "../../Button";
import CollapsedForm from "../CollapsedForm";

import { ProjectDataSection } from "../../App";

type ProjectSectionProps = {
    projects: ProjectDataSection;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
    addSection: (section: string) => void;
};
function ProjectSection(props: ProjectSectionProps) {
    const { projects, onChange, onCollapse, addSection } = props;

    return (
        <div>
            <h2>Projects Section</h2>
            {Object.entries(projects).map(([key, value]) =>
                value.collapsed ? (
                    <CollapsedForm
                        key={key}
                        dataKey={key}
                        data={{ type: "projects", data: value }}
                        onClick={onCollapse}
                    />
                ) : (
                    <ProjectForm
                        key={key}
                        id={key}
                        data={value}
                        onChange={onChange}
                        onCollapse={onCollapse}
                    />
                ),
            )}
            <Button
                onClick={() => addSection("projects")}
                text="Add Project"
                className="add-section"
            />
        </div>
    );
}

export default ProjectSection;
