import { WorkExperienceDataSection } from "../../App";
import PrettyPrintDescription from "../PrettyPrintDescription";

type WorkPreviewProps = {
    experiences: WorkExperienceDataSection;
};
function WorkPreview({ experiences }: WorkPreviewProps) {
    return (
        <div className="experience-preview preview">
            <h2>Work Experience</h2>
            {Object.entries(experiences).map(
                ([key, experience]) =>
                    experience.position && (
                        <div key={key} className="experience">
                            <div className="experience-header header">
                                <div className="position-and-company">
                                    <h3>{experience.position}</h3>
                                    <p>{experience.company}</p>
                                </div>
                                <div className="time-and-location">
                                    <p>
                                        {experience.start} -{" "}
                                        {experience.end || "Present"}
                                    </p>
                                    <p>{experience.location}</p>
                                </div>
                            </div>
                            <div className="description">
                                <PrettyPrintDescription
                                    description={experience.description}
                                />
                            </div>
                        </div>
                    ),
            )}
        </div>
    );
}

export default WorkPreview;
