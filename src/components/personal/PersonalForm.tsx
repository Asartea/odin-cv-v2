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
                    dataKey="email"
                    labelText="Email"
                    value={email}
                    onChange={onChange}
                    inputType="email"
                />
                <InputGroup
                    id="phone"
                    dataKey="phone"
                    labelText="Phone"
                    value={phone}
                    onChange={onChange}
                    inputType="tel"
                />
            </form>
        </div>
    );
}

export default PersonalForm;
