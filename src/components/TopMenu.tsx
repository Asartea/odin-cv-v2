import { LeftColumn } from "../App";
import Button from "../Button";

type TopMenuProps = {
    active: LeftColumn;
    loadDefaultData: () => void;
    clearData: () => void;
    switchActiveColumn: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function TopMenu({
    active,
    loadDefaultData,
    clearData,
    switchActiveColumn,
}: TopMenuProps) {
    return (
        <div className="top-menu">
            <Button
                onClick={loadDefaultData}
                text="Load default data"
                className="dangerous"
            />
            <Button
                onClick={clearData}
                text="Delete Data"
                className="dangerous"
            />
        </div>
    );
}

export default TopMenu;
