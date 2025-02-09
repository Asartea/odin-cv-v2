import {PersonalData} from '../../App'

type PersonalPreviewProps = {
    personal: PersonalData
}

function PersonalPreview({personal}: PersonalPreviewProps) {
    const { firstName, lastName, email, phone } = personal;
    return (
        <div>
            <h2>Personal Information</h2>
            <p>Name: {firstName + ' ' + lastName}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
}

export default PersonalPreview
