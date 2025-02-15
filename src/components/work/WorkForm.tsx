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
                    onChange={onChange}
                    dataKey="company"
                />
                <InputGroup
                    id="position"
                    labelText="Position"
                    value={position}
                    onChange={onChange}
                    dataKey="position"
                />
                <InputGroup
                    id="location"
                    labelText="Location"
                    value={location}
                    onChange={onChange}
                    dataKey="location"
                />
                <InputGroup
                    id="start"
                    labelText="Start"
                    value={start}
                    onChange={onChange}
                    dataKey="start"
                />
                <InputGroup
                    id="end"
                    labelText="End"
                    value={end}
                    onChange={onChange}
                    dataKey="end"
                />
                <InputGroup
                    id="description"
                    labelText="Description"
                    value={description}
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
