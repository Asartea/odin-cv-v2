import PersonalForm from './PersonalForm';

function PersonalSection(props) {
    const { personal, onChange } = props;

    return (
        <div>
            <h2>Personal Section</h2>
            <PersonalForm id="personal" data={personal} onChange={onChange} />
        </div>
    );
}

export default PersonalSection;
