import React, { useState } from "react";
import InputColumn from "./components/InputColumn.js";
import PreviewColumn from "./components/PreviewColumn.js";
import Footer from "./components/footer/Footer.js";
import "./styles/index.css";
import defaultData from "./defaultData";

type PersonalData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    website: string;
    linkedin: string;
    github: string;
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
    skills: string;
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

type LeftColumn = "input" | "customization";

type CVHeaderAlignment = "left" | "top" | "right";

type FontFamily =
    | "sans-serif"
    | "Arial"
    | "Helvetica"
    | "serif"
    | "Times New Roman"
    | "Times"
    | "monospace"
    | "Courier New"
    | "Courier";

// Taken from https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
function useStickyState<T>(defaultValue: T, key: string) {
    const [value, setValue] = React.useState(() => {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}

function App() {
    const [personalData, setPersonalData] = useStickyState(
        defaultData.personal,
        "personalData",
    );
    const [educationData, setEducationData] = useStickyState(
        defaultData.education,
        "educationData",
    );
    const [workExperienceData, setWorkExperienceData] = useStickyState(
        defaultData.workExperience,
        "workExperienceData",
    );
    const [projectData, setProjectData] = useStickyState(
        defaultData.projects,
        "projectData",
    );

    const [leftColumn, setLeftColumn] = useStickyState<LeftColumn>(
        "input",
        "leftColumn",
    );
    const [cvHeaderAlignment, setCVHeaderAlignment] =
        useStickyState<CVHeaderAlignment>("top", "cvHeaderAlignment");

    const [currentColor, setCurrentColor] = useStickyState(
        "rgb(0, 188, 125)",
        "accentColor",
    );

    const [currentFont, setCurrentFont] = useStickyState<FontFamily>(
        "serif",
        "fontFamily",
    );

    // ensure that the accent color and font changes, if any, get applied now;
    // otherwise they will only be applied once the customization tab is opened

    document.body.style.setProperty("--accent-color", currentColor);
    document.body.style.setProperty("--font-family", currentFont);

    return (
        <>
            <div className="content-container">
                <InputColumn
                    personalData={personalData}
                    educationData={educationData}
                    workExperienceData={workExperienceData}
                    projectData={projectData}
                    activeColumn={leftColumn}
                    headerAlignment={cvHeaderAlignment}
                    currentColor={currentColor}
                    fontFamily={currentFont}
                    handlePersonalDataChange={handlePersonalDataChange}
                    handleSectionChange={handleSectionChange}
                    addSection={addSection}
                    onCollapse={toggleCollapsed}
                    switchActiveColumn={toggleActiveColumn}
                    loadDefaultData={loadDefaultData}
                    clearData={clearData}
                    switchCVHeaderAlignment={setCVHeaderAlignment}
                    setCurrentColor={setCurrentColor}
                    setFontFamily={setCurrentFont}
                />
                <PreviewColumn
                    personalData={personalData}
                    educationData={educationData}
                    workExperienceData={workExperienceData}
                    projectData={projectData}
                    headerAlignment={cvHeaderAlignment}
                />
            </div>
            <Footer></Footer>
        </>
    );

    function clearData() {
        setPersonalData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            website: "",
            linkedin: "",
            github: "",
        });
        setEducationData({});
        setWorkExperienceData({});
        setProjectData({});
    }
    function loadDefaultData() {
        setPersonalData(defaultData.personal);
        setEducationData(defaultData.education);
        setWorkExperienceData(defaultData.workExperience);
        setProjectData(defaultData.projects);
        setCurrentColor(defaultData.currentColor);
        setCVHeaderAlignment(defaultData.headerAlignment);
    }

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

    function addSection(e: React.MouseEvent<HTMLButtonElement>) {
        const section = e.currentTarget.closest(".section") as HTMLDivElement;
        const type = section.dataset.type;
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
                    skills: "",
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

    function toggleActiveColumn(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (e.currentTarget.classList.contains("active")) {
            return;
        }
        const column = leftColumn === "input" ? "customization" : "input";
        setLeftColumn(column);
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
    LeftColumn,
    CVHeaderAlignment,
    FontFamily,
};
