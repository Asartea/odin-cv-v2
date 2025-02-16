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
                    placeholder="John"
                    onChange={onChange}
                    required={true}
                />
                <InputGroup
                    id="lastName"
                    dataKey="lastName"
                    labelText="Last Name"
                    value={lastName}
                    placeholder="Doe"
                    required={true}
                    onChange={onChange}
                />
                <InputGroup
                    id="email"
                    dataKey="email"
                    labelText="Email"
                    value={email}
                    placeholder="example@example.com"
                    onChange={onChange}
                    recommended={true}
                    inputType="email"
                />
                <InputGroup
                    id="phone"
                    dataKey="phone"
                    labelText="Phone"
                    value={phone}
                    placeholder="(123) 456-7890"
                    onChange={onChange}
                    optional={true}
                    inputType="tel"
                />
                <InputGroup
                    id="website"
                    dataKey="website"
                    labelText="Website"
                    value={website}
                    placeholder="example.com"
                    onChange={onChange}
                    optional={true}
                    inputType="url"
                />
                <InputGroup
                    id="linkedin"
                    dataKey="linkedin"
                    labelText="LinkedIn"
                    value={linkedin}
                    placeholder="linkedin.com/in/yourprofile"
                    onChange={onChange}
                    recommended={true}
                    inputType="url"
                />
                <InputGroup
                    id="github"
                    dataKey="github"
                    labelText="GitHub"
                    value={github}
                    placeholder="github.com/yourprofile"
                    onChange={onChange}
                    recommended={true}
                    inputType="url"
                />
            </form>
        </div>
    );
}

export default PersonalForm;
