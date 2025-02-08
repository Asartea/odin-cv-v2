import EducationForm from "./EducationForm";


function EducationSection (props) {
    const {educations, onChange} = props;

    return (
        <div>
            <h2>Education Section</h2>
            {Object.entries(educations).map(([key, value]) => (
                <EducationForm key={key} id={key} data={value} onChange={onChange} />
            ))}
        </div>
    );
}

export default EducationSection;
