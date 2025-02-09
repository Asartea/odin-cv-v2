import EducationForm from "./EducationForm";
import Button from "../../Button";

import { EducationDataSection } from "../../App";

type EducationSectionProps = {
    educations: EducationDataSection;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    addSection: (section: string) => void;
};
function EducationSection(props: EducationSectionProps) {
    const { educations, onChange, addSection } = props;

    return (
        <div>
            <h2>Education Section</h2>
            {Object.entries(educations).map(([key, value]) => (
                <EducationForm
                    key={key}
                    id={key}
                    data={value}
                    onChange={onChange}
                />
            ))}
            <Button
                onClick={() => addSection("education")}
                text="Add Education"
                className="add-section"
            />
        </div>
    );
}

export default EducationSection;
