import TopMenu from "./TopMenu";
import EducationSection from "./education/Education";
import WorkSection from "./work/Work";
import ProjectSection from "./projects/Projects";
import PersonalSection from "./personal/Personal";
import CustomizationForm from "./customization/CustomizationForm";
import Button from "./Button";
import {
    PersonalData,
    EducationDataSection,
    WorkExperienceDataSection,
    ProjectDataSection,
    LeftColumn,
    CVHeaderAlignment,
    FontFamily,
} from "../App";
import "../styles/InputColumn.css";
import SwitchActiveTab from "./SwitchActiveTab";

type InputColumnProps = {
    personalData: PersonalData;
    educationData: EducationDataSection;
    workExperienceData: WorkExperienceDataSection;
    projectData: ProjectDataSection;
    activeColumn: LeftColumn;
    headerAlignment: CVHeaderAlignment;
    currentColor: string;
    fontFamily: FontFamily;
    handlePersonalDataChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    handleSectionChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
    addSection: (e: React.MouseEvent<HTMLButtonElement>) => void;
    switchActiveColumn: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loadDefaultData: () => void;
    clearData: () => void;
    switchCVHeaderAlignment: (alignment: CVHeaderAlignment) => void;
    setCurrentColor: (color: string) => void;
    setFontFamily: (fontFamily: FontFamily) => void;
};

function InputColumn(props: InputColumnProps) {
    const {
        personalData,
        educationData,
        workExperienceData,
        projectData,
        activeColumn,
        currentColor,
        fontFamily,
        handlePersonalDataChange,
        handleSectionChange,
        addSection,
        onCollapse,
        switchActiveColumn,
        loadDefaultData,
        clearData,
        headerAlignment: cvHeaderAlignment,
        switchCVHeaderAlignment,
        setCurrentColor,
        setFontFamily,
    } = props;

    return (
        <div className="column input-column">
            <TopMenu
                active={activeColumn}
                loadDefaultData={loadDefaultData}
                clearData={clearData}
                switchActiveColumn={switchActiveColumn}
            />
            <div className="input-content">
                <SwitchActiveTab
                    activeColumn={activeColumn}
                    switchActiveColumn={switchActiveColumn}
                />

                {activeColumn === "input" ? (
                    <>
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
                    </>
                ) : (
                    <CustomizationForm
                        currentColor={currentColor}
                        setCurrentColor={setCurrentColor}
                        fontFamily={fontFamily}
                        headerAlignment={cvHeaderAlignment}
                        setHeaderAlignment={switchCVHeaderAlignment}
                        setFontFamily={setFontFamily}
                    />
                )}
            </div>
        </div>
    );
}

export default InputColumn;
