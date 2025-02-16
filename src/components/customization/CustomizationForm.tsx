import { CVHeaderAlignment, FontFamily } from "../../App";
import InputGroup from "../InputGroup";

type CustomizationFormProps = {
    currentColor: string;
    headerAlignment: CVHeaderAlignment;
    fontFamily: FontFamily;
    setCurrentColor: (color: string) => void;
    setHeaderAlignment: (alignment: CVHeaderAlignment) => void;
    setFontFamily: (fontFamily: FontFamily) => void;
};
function CustomizationForm({
    currentColor,
    headerAlignment,
    fontFamily,
    setCurrentColor,
    setHeaderAlignment,
    setFontFamily,
}: CustomizationFormProps) {
    function updateProperty(key: string, val: string) {
        document.body.style.setProperty(key, val);
    }

    function updateFontFamily(fontFamily: FontFamily) {
        switch (fontFamily) {
            case "Arial":
                return "Arial, sans-serif";
            case "Helvetica":
                return "Helvetica, sans-serif";
            case "Times New Roman":
                return "'Times New Roman', serif";
            case "Times":
                return "Times, serif";
            case "Courier New":
                return "'Courier New', monospace";
            case "Courier":
                return "Courier, monospace";
            default:
                return fontFamily;
        }
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
        <div className="section customization-section">
            <h2>Customization</h2>
            <form>
                <InputGroup
                    id="accent-color"
                    inputType="color"
                    labelText="Accent Color"
                    dataKey="accentColor"
                    required
                    value={RGBToHex(currentColor)}
                    onChange={(e) => {
                        setCurrentColor(hexToRGB(e.target.value));
                        updateProperty(
                            "--accent-color",
                            hexToRGB(e.target.value),
                        );
                    }}
                />
                <InputGroup
                    id="header-alignment"
                    labelText="CV Header Alignment"
                    dataKey="headerAlignment"
                    inputType="select"
                    required
                    value={headerAlignment}
                    onChange={(e) =>
                        setHeaderAlignment(e.target.value as CVHeaderAlignment)
                    }
                    options={["left", "top", "right"]}
                />
                <InputGroup
                    id="font-family"
                    labelText="Font Family"
                    dataKey="fontFamily"
                    inputType="select"
                    required
                    value={fontFamily}
                    onChange={(e) => {
                        setFontFamily(e.target.value as FontFamily);
                        updateProperty(
                            "--font-family",
                            updateFontFamily(e.target.value as FontFamily),
                        );
                    }}
                    options={[
                        "sans-serif",
                        "Arial",
                        "Helvetica",
                        "serif",
                        "Times New Roman",
                        "Times",
                        "monospace",
                        "Courier New",
                        "Courier",
                    ]}
                />
            </form>
        </div>
    );
}

export default CustomizationForm;
