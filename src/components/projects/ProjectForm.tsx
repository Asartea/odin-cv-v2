import { ProjectData } from "../../App";
import InputGroup from "../InputGroup";

type ProjectFormProps = {
    data: ProjectData;
    id: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
};
function ProjectForm(props: ProjectFormProps) {
    const { title, description, github, demo, skills } = props.data;
    const { id, onChange, onCollapse } = props;

    return (
        <div className="section project-section">
            <form
                id={id}
                data-type="projects"
                data-key={id}
                onClick={onCollapse}
            >
                <InputGroup
                    id="title"
                    labelText="Project Name"
                    value={title}
                    placeholder="Project Name"
                    onChange={onChange}
                    required={true}
                    dataKey={"title"}
                />
                <InputGroup
                    id="github"
                    labelText="GitHub"
                    value={github}
                    placeholder="github.com/yourname/example"
                    onChange={onChange}
                    recommended={true}
                    dataKey={"github"}
                />
                <InputGroup
                    id="demo"
                    labelText="Demo"
                    value={demo}
                    placeholder="example.com"
                    onChange={onChange}
                    recommended={true}
                    dataKey={"demo"}
                />
                <InputGroup
                    id="skills"
                    labelText="Skills"
                    value={skills}
                    placeholder="Skill 1, Skill2, Skill3"
                    onChange={onChange}
                    recommended={true}
                    dataKey={"skills"}
                />
                <InputGroup
                    id="description"
                    labelText="Description"
                    value={description}
                    placeholder="Description of the project"
                    onChange={onChange}
                    optional={true}
                    dataKey={"description"}
                    inputType="textarea"
                />
            </form>
        </div>
    );
}

export default ProjectForm;
