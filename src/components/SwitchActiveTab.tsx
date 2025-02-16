import { LeftColumn } from "../App";
import Button from "./Button";

type SwitchActiveTabProps = {
    activeColumn: LeftColumn;
    switchActiveColumn: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function SwitchActiveTab({
    activeColumn,
    switchActiveColumn,
}: SwitchActiveTabProps) {
    return (
        <div className="switch-active-tabs">
            <Button
                onClick={switchActiveColumn}
                text="Content"
                className={`${activeColumn === "input" ? "active" : ""}`}
                disabled={activeColumn === "input"}
            />
            <Button
                onClick={switchActiveColumn}
                text="Customize"
                className={`${activeColumn === "customization" ? "active" : ""}`}
                disabled={activeColumn === "customization"}
            />
        </div>
    );
}

export default SwitchActiveTab;
