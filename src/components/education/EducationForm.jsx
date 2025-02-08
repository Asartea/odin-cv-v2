import InputGroup from "../InputGroup";

function EducationForm (props) {
    const { degree, subject, school, location, start, end, description} = props.data;
    const {id, onChange} = props;


    return (
        <div>
            <h2>Education Form</h2>
            <form id={id} data-type="education">
                <InputGroup id="degree" labelText="Degree" value={degree} onChange={onChange} />
                <InputGroup id="subject" labelText="Subject" value={subject} onChange={onChange} />
                <InputGroup id="school" labelText="School" value={school} onChange={onChange} />
                <InputGroup id="location" labelText="Location" value={location} onChange={onChange} />
                <InputGroup id="start" labelText="Start" value={start} onChange={onChange} />
                <InputGroup id="end" labelText="End" value={end} onChange={onChange} />
                <InputGroup id="description" labelText="Description" value={description} onChange={onChange} optional={true} />
            </form>
        </div>
    );
    }



export default EducationForm;
