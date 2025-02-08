import { useState } from 'react';
import EducationForm from './components/education/EducationForm.jsx';

function App() {

    const [personalData, setPersonalData] = useState({})
    const [educationData, setEducationData] = useState({[1]: {'degree': 'Bachelors', 'school': 'University of Utah', 'location': 'Salt Lake City', 'start': '2010', 'end': '2014'}});
    const [workExperienceData, setWorkExperienceData] = useState({})

    return (
        <EducationForm key="1" id="1" onChange={handleSectionChange} data={educationData['1']} />
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
        } else if(type === 'work-experience') {
            setWorkExperienceData({
                ...workExperienceData,
                [key]: data
            });
        }


    }
}

export default App;
