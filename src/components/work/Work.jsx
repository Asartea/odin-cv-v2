import WorkForm from "./WorkForm";

function WorkSection (props) {
    const {experiences, onChange} = props;

    return (
        <div>
            <h2>Work Section</h2>
            {Object.entries(experiences).map(([key, value]) => (
                <WorkForm key={key} id={key} data={value} onChange={onChange} />
            ))}
        </div>
    );
}

export default WorkSection;
