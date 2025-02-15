import { EducationDataSection } from "../../App";

type EducationPreviewProps = {
    educations: EducationDataSection;
};

function EducationPreview({ educations }: EducationPreviewProps) {
    return (
        <div className="education-preview preview">
            <h2>Education</h2>
            <hr />
            {Object.entries(educations).map(
                ([key, education]) =>
                    education.school && (
                        <div key={key} className="education">
                            <div className="education-header header">
                                <div className="degree-and-school">
                                    <h3>
                                        {education.degree}, {education.subject}
                                    </h3>
                                    <p>{education.school}</p>
                                </div>
                                <div className="time-and-location">
                                    <p>
                                        {education.start} -{" "}
                                        {education.end || "Present"}
                                    </p>
                                    <p>{education.location}</p>
                                </div>
                            </div>
                            <div className="description">
                                <p>{education.description}</p>
                            </div>
                        </div>
                    ),
            )}
        </div>
    );
}

export default EducationPreview;
