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
                addSection={addSection}
            />
            <WorkSection
                experiences={workExperienceData}
                onChange={handleSectionChange}
                addSection={addSection}
            />
        </div>
    );
}

export default InputColumn;
