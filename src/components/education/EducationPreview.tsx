import { EducationDataSection } from "../../App";

type EducationPreviewProps = {
    educations: EducationDataSection;
};

function EducationPreview({ educations }: EducationPreviewProps) {
    return (
        <div className="education-preview">
            <h2>Education</h2>
            {Object.entries(educations).map(
                ([key, education]) =>
                    education.school && (
                        <div key={key} className="education">
                            <h3>{education.school}</h3>
                            <p>
                                {education.degree}
                                {education.subject && `, ${education.subject}`}
                            </p>
                            {education.start && (
                                <p>
                                    {education.start} -{" "}
                                    {education.end || "present"}
                                </p>
                            )}
                            {education.description && (
                                <p>{education.description}</p>
                            )}
                        </div>
                    ),
            )}
        </div>
    );
}

export default EducationPreview;
