import { EducationDataSection } from "../../App";
import PrettyPrintDescription from "../PrettyPrintDescription";

type EducationPreviewProps = {
    educations: EducationDataSection;
};

function EducationPreview({ educations }: EducationPreviewProps) {
    return (
        <div className="education-preview preview">
            <h2>Education</h2>
            {Object.entries(educations).map(
                ([key, education]) =>
                    education.degree && (
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
                                <PrettyPrintDescription
                                    description={education.description}
                                />
                            </div>
                        </div>
                    ),
            )}
        </div>
    );
}

export default EducationPreview;
