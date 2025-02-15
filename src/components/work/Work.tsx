import WorkForm from "./WorkForm";
import Button from "../../Button";
import CollapsedForm from "../CollapsedForm";
import { WorkExperienceDataSection } from "../../App";
import React from "react";

type WorkSectionProps = {
    experiences: WorkExperienceDataSection;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onCollapse: (e: React.MouseEvent<HTMLElement>) => void;
    addSection: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
function WorkSection({
    experiences,
    onChange,
    onCollapse,
    addSection,
}: WorkSectionProps) {
    return (
        <div className="section work-section" data-type="work-experience">
            <h2>Work Section</h2>
            {Object.entries(experiences).map(([key, value]) =>
                value.collapsed ? (
                    <CollapsedForm
                        key={key}
                        title={value.company}
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
                onClick={addSection}
                text={"Add Work Experience"}
                className={"add-section"}
            ></Button>
        </div>
    );
}

export default WorkSection;
