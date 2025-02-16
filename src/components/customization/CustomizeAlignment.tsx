import { CVHeaderAlignment } from "../../App";
import Button from "../../Button";
type CVHeaderAlignmentProps = {
    currentAlignment: CVHeaderAlignment;
    switchAlignment: (alignment: CVHeaderAlignment) => void;
};
import "../../styles/CustomizeAlignment.css";
function CustomizeAlignment({
    currentAlignment,
    switchAlignment,
}: CVHeaderAlignmentProps) {
    return (
        <div className="section alignment-section">
            <h2>CV Header Alignment</h2>
            <div className="alignment">
                <Button
                    onClick={() => switchAlignment("left")}
                    text="Left"
                    className={currentAlignment === "left" ? "active" : ""}
                />
                <Button
                    onClick={() => switchAlignment("top")}
                    text="Top"
                    className={currentAlignment === "top" ? "active" : ""}
                />
                <Button
                    onClick={() => switchAlignment("right")}
                    text="Right"
                    className={currentAlignment === "right" ? "active" : ""}
                />
            </div>
        </div>
    );
}

export default CustomizeAlignment;
