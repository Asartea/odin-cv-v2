import { useState } from 'react';
import InputColumn from './components/InputColumn';
function App() {

    const [personalData, setPersonalData] = useState({'firstName': 'John', 'lastName': 'Doe', 'email': 'test@example.com', 'phone': '123-456-7890'});
    const [educationData, setEducationData] = useState({[crypto.randomUUID()]: {'degree': 'Bachelors', 'school': 'University of Utah', 'location': 'Salt Lake City', 'start': '2010', 'end': '2014', 'subject': 'Computer Science', 'description': ''}});
    const [workExperienceData, setWorkExperienceData] = useState({[crypto.randomUUID()]: {'company': 'Google', 'position': 'Software Engineer', 'location': 'Mountain View', 'start': '2014', 'end': '2018', 'description': ''}});


    return (
        <>
            <h1>Resume Builder</h1>
            <InputColumn personalData={personalData} educationData={educationData} workExperienceData={workExperienceData} handlePersonalDataChange={handlePersonalDataChange} handleSectionChange={handleSectionChange} />

        </>
    );

    function handlePersonalDataChange(e) {
        e.preventDefault();
        const data = structuredClone(personalData);
        data[e.target.id] = e.target.value;
        setPersonalData(data);
    }

    function handleSectionChange(e) {
        e.preventDefault();
        const formElement = e.target.closest('form');
        const key = formElement.id;
        const type = formElement.dataset.type;
        const data = structuredClone(type === 'education' ? educationData[key] : workExperienceData[key]);
        data[e.target.id] = e.target.value;
        if(type === 'education') {
            setEducationData({
                ...educationData,
                [key]: data

            });
            console.log(educationData)
        } else if(type === 'work-experience') {
            setWorkExperienceData({
                ...workExperienceData,
                [key]: data
            });
            console.log(workExperienceData)
        }


    }
}

export default App;
