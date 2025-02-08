import PersonalPreview from "./personal/PersonalPreview";
import EducationPreview from "./education/EducationPreview";
import WorkPreview from "./work/WorkPreview";


function PreviewColumn(props) {
    const { personalData, educationData, workExperienceData } = props;
    return (
        <div className="column preview-column">
            <PersonalPreview personal={personalData} />
            <EducationPreview educations={educationData} />
            <WorkPreview experiences={workExperienceData} />
        </div>
    )
}

export default PreviewColumn;
