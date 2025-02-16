import "../styles/input_group.css";

type InputGroupProps = {
    id: string;
    placeholder?: string;
    labelText: string;
    value: string;
    optional?: boolean;
    recommended?: boolean;
    required?: boolean;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    dataKey: string;
    inputType?: "text" | "number" | "email" | "textarea" | "tel" | "url";
};

function InputGroup(props: InputGroupProps) {
    const {
        id,
        placeholder,
        labelText,
        value,
        optional,
        recommended,
        required,
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
                {required && <span className="required">Required</span>}
            </label>
            {inputType === "textarea" ? (
                <textarea
                    id={id}
                    name={dataKey}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={10}
                    required={required}
                />
            ) : (
                <input
                    type={inputType}
                    id={id}
                    name={dataKey}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}
        </div>
    );
}

export default InputGroup;
