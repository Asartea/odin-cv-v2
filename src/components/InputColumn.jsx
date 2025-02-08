import EducationSection from './education/Education.jsx';
import WorkSection from './work/Work.jsx';
import PersonalSection from './personal/Personal.jsx';

function InputColumn(props) {
    const { personalData, educationData, workExperienceData, handlePersonalDataChange, handleSectionChange } = props;
    return (
        <div className="column input-column">
            <PersonalSection personal={personalData} onChange={handlePersonalDataChange} />
            <EducationSection educations={educationData} onChange={handleSectionChange} />
            <WorkSection experiences={workExperienceData} onChange={handleSectionChange} />
        </div>

    )
}

export default InputColumn;
