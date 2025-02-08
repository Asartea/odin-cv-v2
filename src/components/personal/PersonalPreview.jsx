function PersonalPreview(props) {
    const { firstName, lastName, email, phone, location } = props.personal;
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
