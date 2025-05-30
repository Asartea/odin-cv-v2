import { PersonalData } from "../../App";
import PersonalForm from "./PersonalForm.js";

type PersonalSectionProps = {
    personal: PersonalData;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};
function PersonalSection(props: PersonalSectionProps) {
    const { personal, onChange } = props;

    return (
        <div>
            <h2>Personal Details</h2>
            <PersonalForm id="personal" data={personal} onChange={onChange} />
        </div>
    );
}

export default PersonalSection;
