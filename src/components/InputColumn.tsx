import EducationSection from "./education/Education.js";
import WorkSection from "./work/Work.js";
import PersonalSection from "./personal/Personal.jsx";
import {
    PersonalData,
    EducationDataSection,
    WorkExperienceDataSection,
} from "../App";

type InputColumnProps = {
    personalData: PersonalData;
    educationData: EducationDataSection;
    workExperienceData: WorkExperienceDataSection;
    handlePersonalDataChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    handleSectionChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
    addSection: (type: string) => void;
};

function InputColumn(props: InputColumnProps) {
    const {
        personalData,
        educationData,
        workExperienceData,
        handlePersonalDataChange,
        handleSectionChange,
        addSection,
        onCollapse,
    } = props;

    return (
        <div className="column input-column">
            <PersonalSection
                personal={personalData}
                onChange={handlePersonalDataChange}
            />
            <EducationSection
                educations={educationData}
                onChange={handleSectionChange}
                onCollapse={onCollapse}
                addSection={addSection}
            />
            <WorkSection
                experiences={workExperienceData}
                onChange={handleSectionChange}
                onCollapse={onCollapse}
                addSection={addSection}
            />
        </div>
    );
}

export default InputColumn;
