import EducationForm from "./EducationForm";
import Button from "../../Button";
import CollapsedForm from "../CollapsedForm";

import { EducationDataSection } from "../../App";

type EducationSectionProps = {
    educations: EducationDataSection;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
    addSection: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
function EducationSection(props: EducationSectionProps) {
    const { educations, onChange, onCollapse, addSection } = props;

    return (
        <div className="section education-section" data-type="education">
            <h2>Education</h2>
            {Object.entries(educations).map(([key, value]) =>
                value.collapsed ? (
                    <CollapsedForm
                        key={key}
                        title={value.degree}
                        dataKey={key}
                        data={{ type: "education", data: value }}
                        onClick={onCollapse}
                    />
                ) : (
                    <EducationForm
                        key={key}
                        id={key}
                        data={value}
                        onChange={onChange}
                        onCollapse={onCollapse}
                    />
                ),
            )}
            <Button
                onClick={addSection}
                text="Add Education"
                className="add-section"
            />
        </div>
    );
}

export default EducationSection;
