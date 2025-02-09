import InputGroup from "../InputGroup.js";
import { PersonalData } from "../../App.js";

type PersonalFormProps = {
    data: PersonalData;
    id: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};
function PersonalForm(props: PersonalFormProps) {
    const { firstName, lastName, email, phone } = props.data;
    const { id, onChange } = props;

    return (
        <div>
            <h2>Personal Form</h2>
            <form id={id} data-type="personal">
                <InputGroup
                    id="firstName"
                    dataKey="firstName"
                    labelText="First Name"
                    value={firstName}
                    onChange={onChange}
                />
                <InputGroup
                    id="lastName"
                    dataKey="lastName"
                    labelText="Last Name"
                    value={lastName}
                    onChange={onChange}
                />
                <InputGroup
                    id="email"
                    type="email"
                    dataKey="email"
                    labelText="Email"
                    value={email}
                    onChange={onChange}
                />
                <InputGroup
                    id="phone"
                    type="tel"
                    dataKey="phone"
                    labelText="Phone"
                    value={phone}
                    onChange={onChange}
                />
            </form>
        </div>
    );
}

export default PersonalForm;
