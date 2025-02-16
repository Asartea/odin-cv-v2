type CustomizeColorProps = {
    currentColor: string;
    setCurrentColor: (color: string) => void;
};
import "../../styles/CustomizeColor.css";
function CustomizeColor({
    currentColor,
    setCurrentColor,
}: CustomizeColorProps) {
    function updateProperty(key: string, val: string) {
        document.body.style.setProperty(key, val);
    }

    function hexToRGB(hex: string) {
        let r = 0,
            g = 0,
            b = 0;

        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }

        return `rgb(${r}, ${g}, ${b})`;
    }

    function RGBToHex(rgb: string) {
        const [r, g, b] = rgb
            .slice(4, -1)
            .split(",")
            .map((val) => parseInt(val).toString(16).padStart(2, "0"));

        return `#${r}${g}${b}`;
    }

    updateProperty("--accent-color", currentColor);

    return (
        <div className="customize-color">
            <h2>Customize Accent Color</h2>
            <input
                type="color"
                value={RGBToHex(currentColor)}
                onChange={(e) => {
                    setCurrentColor(hexToRGB(e.target.value));
                    updateProperty("--accent-color", hexToRGB(e.target.value));
                }}
            />
            <div
                className="color-box"
                style={{ backgroundColor: currentColor }}
            ></div>
        </div>
    );
}

export default CustomizeColor;
