const defaultData = {
    personal: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "555-555-5555"
    },
    education: {
        [crypto.randomUUID()]: {
            degree: "Bachelor of Science",
            school: "University of California, Berkeley",
            location: "Berkeley",
            start: "2010",
            end: "2014",
            subject: "Computer Science",
            description: "",
            collapsed: true,
        }
    },
    workExperience: {
        [crypto.randomUUID()]: {
            company: "Google",
            position: "Software Engineer",
            location: "Mountain View",
            start: "2014",
            end: "2018",
            description: "",
            collapsed: true,
        }
    },
    projects: {
        [crypto.randomUUID()]: {
            title: "Project 1",
            description: "Description of project 1",
            github: "https://github.com",
            demo: "https://demo.com",
            collapsed: true,
        },
        [crypto.randomUUID()]: {
            title: "Project 2",
            description: "Description of project 2",
            github: "https://github.com",
            demo: "https://demo.com",
            collapsed: true,
        }
    }
};

export default defaultData
