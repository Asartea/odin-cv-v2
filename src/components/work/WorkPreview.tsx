import { WorkExperienceDataSection } from "../../App";
type WorkPreviewProps = {
    experiences: WorkExperienceDataSection;
};
function WorkPreview({ experiences }: WorkPreviewProps) {
    return (
        <div className="experience-preview">
            <h2>Work Experience</h2>
            {Object.entries(experiences).map(
                ([key, experience]) =>
                    experience.company && (
                        <div key={key} className="education">
                            <h3>{experience.company}</h3>
                            <p>{experience.position}</p>
                            <p>
                                {experience.start} - {experience.end}
                            </p>
                            {experience.description && (
                                <p>{experience.description}</p>
                            )}
                        </div>
                    ),
            )}
        </div>
    );
}

export default WorkPreview;
