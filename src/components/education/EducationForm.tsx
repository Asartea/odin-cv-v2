import { EducationData } from "../../App";
import InputGroup from "../InputGroup";

type EducationFormProps = {
    data: EducationData;
    id: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
};
function EducationForm(props: EducationFormProps) {
    const { degree, subject, school, location, start, end, description } =
        props.data;
    const { id, onChange, onCollapse } = props;

    return (
        <div>
            <form
                id={id}
                data-type="education"
                data-key={id}
                onClick={onCollapse}
            >
                <InputGroup
                    id="degree"
                    labelText="Degree"
                    value={degree}
                    placeholder="Bachelor of Science"
                    onChange={onChange}
                    required={true}
                    dataKey={"degree"}
                />
                <InputGroup
                    id="subject"
                    labelText="Subject"
                    value={subject}
                    placeholder="Computer Science"
                    onChange={onChange}
                    required={true}
                    dataKey={"subject"}
                />
                <InputGroup
                    id="school"
                    labelText="School"
                    value={school}
                    placeholder="Example University"
                    onChange={onChange}
                    recommended={true}
                    dataKey={"school"}
                />
                <InputGroup
                    id="location"
                    labelText="Location"
                    value={location}
                    placeholder="City, Country"
                    onChange={onChange}
                    recommended={true}
                    dataKey={"location"}
                />
                <InputGroup
                    id="start"
                    labelText="Start"
                    value={start}
                    placeholder="YYYY"
                    onChange={onChange}
                    dataKey={"start"}
                />
                <InputGroup
                    id="end"
                    labelText="End"
                    value={end}
                    placeholder="YYYY"
                    onChange={onChange}
                    optional={true}
                    dataKey={"end"}
                />
                <InputGroup
                    id="description"
                    labelText="Description"
                    value={description}
                    placeholder={`Description of the education\nLine breaks are converted to bullet points`}
                    onChange={onChange}
                    optional={true}
                    dataKey={"description"}
                    inputType="textarea"
                />
            </form>
        </div>
    );
}

export default EducationForm;
