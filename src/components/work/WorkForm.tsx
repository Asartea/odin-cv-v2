import { WorkExperienceData } from "../../App";
import InputGroup from "../InputGroup";

type WorkFormProps = {
    data: WorkExperienceData;
    id: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
};

function WorkForm(props: WorkFormProps) {
    const { company, position, location, start, end, description } = props.data;
    const { id, onChange, onCollapse } = props;

    return (
        <div>
            <form
                id={id}
                data-type="work-experience"
                data-key={id}
                onClick={onCollapse}
            >
                <InputGroup
                    id="company"
                    labelText="Company"
                    value={company}
                    placeholder="Company Name"
                    onChange={onChange}
                    recommended={true}
                    dataKey="company"
                />
                <InputGroup
                    id="position"
                    labelText="Position"
                    value={position}
                    placeholder="Software Engineer"
                    onChange={onChange}
                    required={true}
                    dataKey="position"
                />
                <InputGroup
                    id="location"
                    labelText="Location"
                    value={location}
                    placeholder="City, Country"
                    onChange={onChange}
                    recommended={true}
                    dataKey="location"
                />
                <InputGroup
                    id="start"
                    labelText="Start"
                    value={start}
                    placeholder="YYYY"
                    onChange={onChange}
                    dataKey="start"
                />
                <InputGroup
                    id="end"
                    labelText="End"
                    value={end}
                    placeholder="YYYY"
                    onChange={onChange}
                    optional={true}
                    dataKey="end"
                />
                <InputGroup
                    id="description"
                    labelText="Description"
                    value={description}
                    placeholder="Description of the work experience"
                    onChange={onChange}
                    optional={true}
                    dataKey="description"
                    inputType="textarea"
                />
            </form>
        </div>
    );
}

export default WorkForm;
