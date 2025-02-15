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
    const { firstName, lastName, email, phone, website, linkedin, github } =
        props.data;
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
                <InputGroup
                    id="website"
                    dataKey="website"
                    labelText="Website"
                    value={website}
                    onChange={onChange}
                    inputType="url"
                />
                <InputGroup
                    id="linkedin"
                    dataKey="linkedin"
                    labelText="LinkedIn"
                    value={linkedin}
                    onChange={onChange}
                    inputType="url"
                />
                <InputGroup
                    id="github"
                    dataKey="github"
                    labelText="GitHub"
                    value={github}
                    onChange={onChange}
                    inputType="url"
                />
            </form>
        </div>
    );
}

export default PersonalForm;
