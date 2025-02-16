import PersonalPreview from "./personal/PersonalPreview";
import EducationPreview from "./education/EducationPreview";
import WorkPreview from "./work/WorkPreview";
import {
    EducationDataSection,
    PersonalData,
    WorkExperienceDataSection,
    ProjectDataSection,
    CVHeaderAlignment,
} from "../App";
import ProjectPreview from "./projects/ProjectPreview";
import "../styles/preview.css";

type PreviewColumnProps = {
    personalData: PersonalData;
    educationData: EducationDataSection;
    workExperienceData: WorkExperienceDataSection;
    projectData: ProjectDataSection;
    headerAlignment: CVHeaderAlignment;
};
function PreviewColumn({
    personalData,
    educationData,
    workExperienceData,
    projectData,
    headerAlignment,
}: PreviewColumnProps) {
    return (
        <div className={`column preview-column ${headerAlignment}`}>
            <PersonalPreview personal={personalData} />
            <div className="cv-details">
                <EducationPreview educations={educationData} />
                <WorkPreview experiences={workExperienceData} />
                <ProjectPreview projects={projectData} />
            </div>
        </div>
    );
}

export default PreviewColumn;
