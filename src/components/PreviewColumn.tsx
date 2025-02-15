import PersonalPreview from "./personal/PersonalPreview";
import EducationPreview from "./education/EducationPreview";
import WorkPreview from "./work/WorkPreview";
import {
    EducationDataSection,
    PersonalData,
    WorkExperienceDataSection,
    ProjectDataSection,
} from "../App";
import ProjectPreview from "./projects/ProjectPreview";
import "../styles/preview.css";

type PreviewColumnProps = {
    personalData: PersonalData;
    educationData: EducationDataSection;
    workExperienceData: WorkExperienceDataSection;
    projectData: ProjectDataSection;
};
function PreviewColumn({
    personalData,
    educationData,
    workExperienceData,
    projectData,
}: PreviewColumnProps) {
    return (
        <div className="column preview-column">
            <PersonalPreview personal={personalData} />
            <EducationPreview educations={educationData} />
            <WorkPreview experiences={workExperienceData} />
            <ProjectPreview projects={projectData} />
        </div>
    );
}

export default PreviewColumn;
