import WorkForm from "./WorkForm";
import Button from "../../Button";
import CollapsedForm from "../CollapsedForm";
import { WorkExperienceDataSection } from "../../App";

type WorkSectionProps = {
    experiences: WorkExperienceDataSection;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
    addSection: (section: string) => void;
};
function WorkSection({
    experiences,
    onChange,
    onCollapse,
    addSection,
}: WorkSectionProps) {
    return (
        <div>
            <h2>Work Section</h2>
            {Object.entries(experiences).map(([key, value]) =>
                value.collapsed ? (
                    <CollapsedForm
                        key={key}
                        dataKey={key}
                        data={{ type: "work-experience", data: value }}
                        onClick={onCollapse}
                    />
                ) : (
                    <WorkForm
                        key={key}
                        id={key}
                        data={value}
                        onChange={onChange}
                        onCollapse={onCollapse}
                    />
                ),
            )}
            <Button
                onClick={() => addSection("work-experience")}
                text={"Add Work Experience"}
            ></Button>
        </div>
    );
}

export default WorkSection;
