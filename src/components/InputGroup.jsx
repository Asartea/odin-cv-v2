function InputGroup({
    id,
    placeholder,
    labelText,
    value,
    optional = false,
    recommended = true,
    onChange,
    dataKey
}) {
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
