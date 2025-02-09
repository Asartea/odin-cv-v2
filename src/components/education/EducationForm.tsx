import { EducationData } from "../../App";
import InputGroup from "../InputGroup";

type EducationFormProps = {
    data: EducationData;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function EducationForm(props: EducationFormProps) {
    const { degree, subject, school, location, start, end, description } =
        props.data;
    const { id, onChange } = props;

    return (
        <div>
            <h2>Education Form</h2>
            <form id={id} data-type="education">
                <InputGroup
                    id="degree"
                    labelText="Degree"
                    value={degree}
                    onChange={onChange}
                    dataKey={"degree"}
                />
                <InputGroup
                    id="subject"
                    labelText="Subject"
                    value={subject}
                    onChange={onChange}
                    dataKey={"subject"}
                />
                <InputGroup
                    id="school"
                    labelText="School"
                    value={school}
                    onChange={onChange}
                    dataKey={"school"}
                />
                <InputGroup
                    id="location"
                    labelText="Location"
                    value={location}
                    onChange={onChange}
                    dataKey={"location"}
                />
                <InputGroup
                    id="start"
                    labelText="Start"
                    value={start}
                    onChange={onChange}
                    dataKey={"start"}
                />
                <InputGroup
                    id="end"
                    labelText="End"
                    value={end}
                    onChange={onChange}
                    dataKey={"end"}
                />
                <InputGroup
                    id="description"
                    labelText="Description"
                    value={description}
                    onChange={onChange}
                    optional={true}
                    dataKey={"description"}
                />
            </form>
        </div>
    );
}

export default EducationForm;
