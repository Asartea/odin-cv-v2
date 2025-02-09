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
};
type EducationDataSection = {
    [key: string]: EducationData;
};

type WorkExperienceData = {
    company: string;
    position: string;
    location: string;
    start: string;
    end: string;
    description: string;
};

type WorkExperienceDataSection = {
    [key: string]: WorkExperienceData;
};

function App() {
    const [personalData, setPersonalData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "test@example.com",
        phone: "123-456-7890",
    });
    const [educationData, setEducationData] = useState({
        [crypto.randomUUID()]: {
            degree: "Bachelors",
            school: "University of Utah",
            location: "Salt Lake City",
            start: "2010",
            end: "2014",
            subject: "Computer Science",
            description: "",
        },
    });
    const [workExperienceData, setWorkExperienceData] = useState({
        [crypto.randomUUID()]: {
            company: "Google",
            position: "Software Engineer",
            location: "Mountain View",
            start: "2014",
            end: "2018",
            description: "",
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
            />
            <PreviewColumn
                personalData={personalData}
                educationData={educationData}
                workExperienceData={workExperienceData}
            />
        </div>
    );

    function handlePersonalDataChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const key = e.target.id as keyof typeof personalData;
        const data = structuredClone(personalData);
        data[key] = e.target.value;
        setPersonalData(data);
    }

    function handleSectionChange(e: React.ChangeEvent<HTMLInputElement>) {
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
            newWorkExperienceData[data_key] = e.target.value;
            setWorkExperienceData({
                ...workExperienceData,
                [key]: newWorkExperienceData,
            });
            console.log(workExperienceData);
        }
    }

    function somethingIHateReact() {
        console.log("God I hate it here");
    }

    function addSection(type: string) {
        if (type === "education") {
            setEducationData({
                ...educationData,
                [crypto.randomUUID()]: {
                    degree: "",
                    school: "",
                    location: "",
                    start: "",
                    end: "",
                    subject: "",
                    description: "",
                },
            });
        } else if (type === "work-experience") {
            setWorkExperienceData({
                ...workExperienceData,
                [crypto.randomUUID()]: {
                    company: "",
                    position: "",
                    location: "",
                    start: "",
                    end: "",
                    description: "",
                },
            });
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
};
