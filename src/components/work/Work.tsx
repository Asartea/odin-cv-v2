import WorkForm from "./WorkForm";
import Button from "../../Button";
import { WorkExperienceDataSection } from "../../App";

type WorkSectionProps = {
    experiences: WorkExperienceDataSection;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addSection: (section: string) => void;
};
function WorkSection({ experiences, onChange, addSection }: WorkSectionProps) {
    return (
        <div>
            <h2>Work Section</h2>
            {Object.entries(experiences).map(([key, value]) => (
                <WorkForm key={key} id={key} data={value} onChange={onChange} />
            ))}
            <Button
                onClick={() => addSection("work-experience")}
                text={"Add Work Experience"}
            ></Button>
        </div>
    );
}

export default WorkSection;
