type InputGroupProps = {
    id: string;
    type?: "text" | "textarea" | "email" | "tel";
    placeholder?: string;
    labelText: string;
    value: string;
    optional?: boolean;
    recommended?: boolean;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    dataKey: string;
};

function InputGroup(props: InputGroupProps) {
    const {
        id,
        type = "text",
        placeholder,
        labelText,
        value,
        optional,
        recommended,
        onChange,
        dataKey,
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
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={dataKey}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
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
