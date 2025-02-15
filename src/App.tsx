import { useState } from "react";
import InputColumn from "./components/InputColumn.js";
import PreviewColumn from "./components/PreviewColumn.js";
import "./styles/index.css";
import defaultData from "./defaultData";

type PersonalData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

type EducationData = {
    degree: string;
    school: string;
    location: string;
    start: string;
    end: string;
    subject: string;
    description: string;
    collapsed: boolean;
};

type WorkExperienceData = {
    company: string;
    position: string;
    location: string;
    start: string;
    end: string;
    description: string;
    collapsed: boolean;
};

type ProjectData = {
    title: string;
    description: string;
    github: string;
    demo: string;
    collapsed: boolean;
};

type Section<T> = {
    [key: string]: T;
};

type WorkExperienceDataSection = Section<WorkExperienceData>;

type EducationDataSection = Section<EducationData>;

type ProjectDataSection = Section<ProjectData>;

type DataSection =
    | { type: "personal"; data: PersonalData }
    | { type: "education"; data: EducationDataSection }
    | { type: "work-experience"; data: WorkExperienceDataSection }
    | { type: "projects"; data: ProjectDataSection };

type Data =
    | { type: "education"; data: EducationData }
    | { type: "work-experience"; data: WorkExperienceData }
    | { type: "projects"; data: ProjectData };

function App() {
    const [personalData, setPersonalData] = useState(defaultData.personal);
    const [educationData, setEducationData] = useState(defaultData.education);
    const [workExperienceData, setWorkExperienceData] = useState(
        defaultData.workExperience,
    );
    const [projectData, setProjectData] = useState(defaultData.projects);

    return (
        <div className="content-container">
            <InputColumn
                personalData={personalData}
                educationData={educationData}
                workExperienceData={workExperienceData}
                projectData={projectData}
                handlePersonalDataChange={handlePersonalDataChange}
                handleSectionChange={handleSectionChange}
                addSection={addSection}
                onCollapse={toggleCollapsed}
            />
            <PreviewColumn
                personalData={personalData}
                educationData={educationData}
                workExperienceData={workExperienceData}
                projectData={projectData}
            />
        </div>
    );

    function handlePersonalDataChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        e.preventDefault();
        const key = e.target.id as keyof typeof personalData;
        const data = structuredClone(personalData);
        data[key] = e.target.value;
        setPersonalData(data);
    }

    function handleSectionChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        e.preventDefault();
        const formElement = e.target.closest("form");
        if (!formElement) {
            console.error("Could not find form element");
            return;
        }
        const key = formElement.id;
        const type = formElement.dataset.type;
        if (type === "education") {
            const newEducationData = structuredClone(educationData[key]);
            const data_key = e.target.id as keyof typeof newEducationData;
            if (data_key == "collapsed") {
                return;
            }
            newEducationData[data_key] = e.target.value;
            setEducationData({
                ...educationData,
                [key]: newEducationData,
            });
        } else if (type === "work-experience") {
            const newWorkExperienceData = structuredClone(
                workExperienceData[key],
            );
            const data_key = e.target.id as keyof typeof newWorkExperienceData;
            if (data_key == "collapsed") {
                return;
            }
            newWorkExperienceData[data_key] = e.target.value;
            setWorkExperienceData({
                ...workExperienceData,
                [key]: newWorkExperienceData,
            });
        } else if (type === "projects") {
            const newProjectData = structuredClone(projectData[key]);
            const data_key = e.target.id as keyof typeof newProjectData;
            if (data_key == "collapsed") {
                return;
            }
            newProjectData[data_key] = e.target.value;
            setProjectData({
                ...projectData,
                [key]: newProjectData,
            });
        }
    }

    function addSection(type: string) {
        if (type === "education") {
            const newEducationData = collapseAllInSection(
                structuredClone(educationData),
            ) as EducationDataSection;

            setEducationData({
                ...newEducationData,
                [crypto.randomUUID()]: {
                    degree: "",
                    school: "",
                    location: "",
                    start: "",
                    end: "",
                    subject: "",
                    description: "",
                    collapsed: false,
                },
            });
        } else if (type === "work-experience") {
            const newWorkExperienceData = collapseAllInSection(
                structuredClone(workExperienceData),
            ) as WorkExperienceDataSection;
            setWorkExperienceData({
                ...newWorkExperienceData,
                [crypto.randomUUID()]: {
                    company: "",
                    position: "",
                    location: "",
                    start: "",
                    end: "",
                    description: "",
                    collapsed: false,
                },
            });
        } else if (type === "projects") {
            const newProjectData = collapseAllInSection(
                structuredClone(projectData),
            ) as ProjectDataSection;
            setProjectData({
                ...newProjectData,
                [crypto.randomUUID()]: {
                    title: "",
                    description: "",
                    github: "",
                    demo: "",
                    collapsed: false,
                },
            });
        }
    }

    function collapseAllInSection(
        section:
            | EducationDataSection
            | WorkExperienceDataSection
            | ProjectDataSection,
    ) {
        for (const value of Object.values(section)) {
            value.collapsed = true;
        }
        return section;
    }

    function toggleCollapsed(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        if (
            !(
                e.target instanceof HTMLHeadingElement ||
                e.target instanceof HTMLFormElement ||
                e.target instanceof HTMLDivElement
            )
        ) {
            return;
        }
        const { type, key } = e.currentTarget.dataset;
        if (!type || !key) {
            console.error("Could not find type or key");
            return;
        }
        if (type === "education") {
            const oldValue = educationData[key].collapsed;
            const newEducationDataSection = collapseAllInSection(
                structuredClone(educationData),
            ) as EducationDataSection;
            newEducationDataSection[key].collapsed = !oldValue;
            setEducationData(newEducationDataSection);
        } else if (type === "work-experience") {
            const oldValue = workExperienceData[key].collapsed;
            const newWorkExperienceDataSection = collapseAllInSection(
                structuredClone(workExperienceData),
            ) as WorkExperienceDataSection;
            newWorkExperienceDataSection[key].collapsed = !oldValue;
            setWorkExperienceData(newWorkExperienceDataSection);
        } else if (type === "projects") {
            const oldValue = projectData[key].collapsed;
            const newProjectDataSection = collapseAllInSection(
                structuredClone(projectData),
            ) as ProjectDataSection;
            newProjectDataSection[key].collapsed = !oldValue;
            setProjectData(newProjectDataSection);
        }
    }
}

export default App;
export {
    PersonalData,
    EducationData,
    EducationDataSection,
    WorkExperienceData,
    WorkExperienceDataSection,
    ProjectData,
    ProjectDataSection,
    DataSection,
    Data,
};
