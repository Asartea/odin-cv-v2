import InputGroup from "../InputGroup";

function EducationForm (props) {
    const { degree, school, location, start, end} = props.data;
    const {id, onChange} = props;


    return (
        <div>
            <h2>Education Form</h2>
            <form id={id} data-type="education">
                <InputGroup id="degree" labelText="Degree" value={degree} onChange={onChange} />
                <InputGroup id="school" labelText="School" value={school} onChange={onChange} />
                <InputGroup id="location" labelText="Location" value={location} onChange={onChange} />
                <InputGroup id="start" labelText="Start" value={start} onChange={onChange} />
                <InputGroup id="end" labelText="End" value={end} onChange={onChange} />
            </form>
        </div>
    );
    }



export default EducationForm;
