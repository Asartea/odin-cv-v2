import EducationSection from "./education/Education";
import WorkSection from "./work/Work";
import ProjectSection from "./projects/Projects";
import PersonalSection from "./personal/Personal";
import "../styles/input.css";
import {
    PersonalData,
    EducationDataSection,
    WorkExperienceDataSection,
    ProjectDataSection,
} from "../App";

type InputColumnProps = {
    personalData: PersonalData;
    educationData: EducationDataSection;
    workExperienceData: WorkExperienceDataSection;
    projectData: ProjectDataSection;
    handlePersonalDataChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    handleSectionChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
    addSection: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function InputColumn(props: InputColumnProps) {
    const {
        personalData,
        educationData,
        workExperienceData,
        projectData,
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
            <ProjectSection
                projects={projectData}
                onChange={handleSectionChange}
                onCollapse={onCollapse}
                addSection={addSection}
            />
        </div>
    );
}

export default InputColumn;
