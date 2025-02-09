type InputGroupProps = {
    id: string;
    placeholder?: string;
    labelText: string;
    value: string;
    optional?: boolean;
    recommended?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataKey: string;
};

function InputGroup(props: InputGroupProps) {
    const { id, placeholder, labelText, value, optional, recommended, onChange, dataKey } = props;
    return (
        <div className="input-group">
            <label htmlFor={id}>
                {labelText}
                {optional && <span className="optional">Optional</span>}
                {recommended && <span className="recommended">Recommended</span>}
            </label>
            <input type="text" id={id} name={dataKey} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}


export default InputGroup;
