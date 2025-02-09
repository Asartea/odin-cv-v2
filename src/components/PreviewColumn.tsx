import PersonalPreview from "./personal/PersonalPreview";
import EducationPreview from "./education/EducationPreview";
import WorkPreview from "./work/WorkPreview";
import {
    EducationDataSection,
    PersonalData,
    WorkExperienceDataSection,
} from "../App";

type PreviewColumnProps = {
    personalData: PersonalData;
    educationData: EducationDataSection;
    workExperienceData: WorkExperienceDataSection;
};
function PreviewColumn({
    personalData,
    educationData,
    workExperienceData,
}: PreviewColumnProps) {
    return (
        <div className="column preview-column">
            <PersonalPreview personal={personalData} />
            <EducationPreview educations={educationData} />
            <WorkPreview experiences={workExperienceData} />
        </div>
    );
}

export default PreviewColumn;
