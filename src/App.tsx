import { useState } from "react";
import InputColumn from "./components/InputColumn.js";
import PreviewColumn from "./components/PreviewColumn.js";
import "./styles/index.css";
import React from "react";

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

type Section<T> = {
    [key: string]: T;
};

type WorkExperienceDataSection = Section<WorkExperienceData>;

type EducationDataSection = Section<EducationData>;

type DataSection =
    | { type: "personal"; data: PersonalData }
    | { type: "education"; data: EducationDataSection }
    | { type: "work-experience"; data: WorkExperienceDataSection };

type Data =
    | { type: "education"; data: EducationData }
    | { type: "work-experience"; data: WorkExperienceData };

function App() {
    const [personalData, setPersonalData] = useState<PersonalData>({
        firstName: "John",
        lastName: "Doe",
        email: "test@example.com",
        phone: "123-456-7890",
    });
    const [educationData, setEducationData] = useState<EducationDataSection>({
        [crypto.randomUUID()]: {
            degree: "Bachelors",
            school: "University of Utah",
            location: "Salt Lake City",
            start: "2010",
            end: "2014",
            subject: "Computer Science",
            description: "",
            collapsed: true,
        },
    });
    const [workExperienceData, setWorkExperienceData] =
        useState<WorkExperienceDataSection>({
            [crypto.randomUUID()]: {
                company: "Google",
                position: "Software Engineer",
                location: "Mountain View",
                start: "2014",
                end: "2018",
                description: "",
                collapsed: true,
            },
        });

    return (
        <div className="content-container">
            <InputColumn
                personalData={personalData}
                educationData={educationData}
                workExperienceData={workExperienceData}
                handlePersonalDataChange={handlePersonalDataChange}
                handleSectionChange={handleSectionChange}
                addSection={addSection}
                onCollapse={toggleCollapsed}
            />
            <PreviewColumn
                personalData={personalData}
                educationData={educationData}
                workExperienceData={workExperienceData}
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
            console.log(workExperienceData);
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
        }
    }

    function collapseAllInSection(
        section: EducationDataSection | WorkExperienceDataSection,
    ) {
        for (const value of Object.values(section)) {
            value.collapsed = true;
        }
        return section;
    }

    function toggleCollapsed(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        if (e.target instanceof HTMLInputElement) {
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
    DataSection,
    Data,
};
