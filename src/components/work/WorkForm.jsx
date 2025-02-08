import InputGroup from "../InputGroup";

function WorkForm (props) {
    const { company, position, location, start, end} = props.data;
    const {id, onChange} = props;

    return (
        <div>
            <h2>Work Form</h2>
            <form id={id} data-type="work-experience">
                <InputGroup id="company" labelText="Company" value={company} onChange={onChange} />
                <InputGroup id="position" labelText="Position" value={position} onChange={onChange} />
                <InputGroup id="location" labelText="Location" value={location} onChange={onChange} />
                <InputGroup id="start" labelText="Start" value={start} onChange={onChange} />
                <InputGroup id="end" labelText="End" value={end} onChange={onChange} />
                <InputGroup id="description" labelText="Description" value={props.data.description} onChange={onChange} optional={true}/>
            </form>
        </div>
    );
    }


export default WorkForm;
