import "../styles/input_group.css";

type InputGroupProps = {
    id: string;
    placeholder?: string;
    labelText: string;
    value: string;
    optional?: boolean;
    recommended?: boolean;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    dataKey: string;
    inputType?: "text" | "number" | "email" | "textarea" | "tel";
};

function InputGroup(props: InputGroupProps) {
    const {
        id,
        placeholder,
        labelText,
        value,
        optional,
        recommended,
        onChange,
        dataKey,
        inputType = "text",
    } = props;
    return (
        <div className="input-group">
            <label htmlFor={id}>
                {labelText}
                {optional && <span className="optional">Optional</span>}
                {recommended && (
                    <span className="recommended">Recommended</span>
                )}
            </label>
            {inputType === "textarea" ? (
                <textarea
                    id={id}
                    name={dataKey}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={10}
                />
            ) : (
                <input
                    type={inputType}
                    id={id}
                    name={dataKey}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
}

export default InputGroup;
