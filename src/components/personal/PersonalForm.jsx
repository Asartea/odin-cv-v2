import InputGroup from "../InputGroup";


function PersonalForm (props) {
    const { firstName, lastName, email, phone} = props.data;
    const {id, onChange} = props;

    return (
        <div>
            <h2>Personal Form</h2>
            <form id={id} data-type="personal">
                <InputGroup id="firstName" labelText="First Name" value={firstName} onChange={onChange} />
                <InputGroup id="lastName" labelText="Last Name" value={lastName} onChange={onChange} />
                <InputGroup id="email" labelText="Email" value={email} onChange={onChange} />
                <InputGroup id="phone" labelText="Phone" value={phone} onChange={onChange} />
            </form>
        </div>
    );
    }


export default PersonalForm
