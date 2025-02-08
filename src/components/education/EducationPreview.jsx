function EducationPreview({ educations}) {
    return (
        <div className="education-preview">
            <h2>Education</h2>
            {Object.entries(educations).map(([key, education]) => (
                <div key={key} className="education">
                    <h3>{education.school}</h3>
                    <p>{education.degree}, {education.subject}</p>
                    <p>{education.start} - {education.end}</p>
                    {education.description && <p>{education.description}</p>}
                </div>
            ))}
        </div>
    )
}

export default EducationPreview;
