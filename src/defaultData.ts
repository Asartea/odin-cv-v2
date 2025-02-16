import { PersonalData, EducationData, WorkExperienceData, ProjectData, CVHeaderAlignment, FontFamily } from "./App";

type DefaultData = {
    personal: PersonalData;
    education: Record<string, EducationData>;
    workExperience: Record<string, WorkExperienceData>;
    projects: Record<string, ProjectData>;
    headerAlignment: CVHeaderAlignment;
    currentColor: string;
    fontFamily: FontFamily;
};

const defaultData: DefaultData = {
    personal: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "555-555-5555",
        website: "example.com",
        linkedin: "linkedin.com",
        github: "github.com",
    },
    education: {
        [crypto.randomUUID()]: {
            degree: "Bachelor of Science",
            school: "Example University",
            location: "Null Island",
            start: "2010",
            end: "2014",
            subject: "Computer Science",
            description: "Some content here \n And some more \n I also learned something about Computer Science",
            collapsed: true,
        }
    },
    workExperience: {
        [crypto.randomUUID()]: {
            company: "Example Company",
            position: "Software Engineer",
            location: "Null Island",
            start: "2014",
            end: "2018",
            description: "",
            collapsed: true,
        },
        [crypto.randomUUID()]: {
            company: "Another Company",
            position: "Senior Software Engineer",
            location: "Null Island",
            start: "2018",
            end: "2021",
            description: "",
            collapsed: true,
        }
    },
    projects: {
        [crypto.randomUUID()]: {
            title: "Project 1",
            description: "Description of project 1",
            github: "https://github.com",
            demo: "https://example.com",
            skills: "Something, Something else, Another thing",
            collapsed: true,
        },
        [crypto.randomUUID()]: {
            title: "Project 2",
            description: "Description of project 2",
            github: "https://github.com",
            demo: "https://example.com",
            skills: "Something, Something else, Another thing",
            collapsed: true,
        }
    },
    currentColor: "rgb(0, 188, 125)",
    headerAlignment: "top",
    fontFamily: "serif",

};

export default defaultData
