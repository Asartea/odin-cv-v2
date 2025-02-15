import { PersonalData } from "../../App";
type PersonalPreviewProps = {
    personal: PersonalData;
};

function PersonalPreview({ personal }: PersonalPreviewProps) {
    const { firstName, lastName, email, phone, website } = personal;
    return (
        <div className="personal-preview">
            <h1>
                {firstName} {lastName}
            </h1>
            <div className="contact-info">
                <p>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p>
                    <a href={`tel:${phone}`}>{phone}</a>
                </p>
                {website && (
                    <p>
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {website}
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
}

export default PersonalPreview;
