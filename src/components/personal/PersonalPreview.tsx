import { PersonalData } from "../../App";
type PersonalPreviewProps = {
    personal: PersonalData;
};

function PersonalPreview({ personal }: PersonalPreviewProps) {
    const { firstName, lastName, email, phone, website, linkedin, github } =
        personal;
    const contactInfo = [email, phone, website, linkedin, github];
    return (
        <div className="personal-preview">
            <h1>
                {firstName} {lastName}
            </h1>
            <div className="contact-info">
                {contactInfo.map((info, index) => {
                    if (!info) {
                        return null;
                    }
                    const label = [
                        "Email",
                        "Phone",
                        "Website",
                        "LinkedIn",
                        "GitHub",
                    ][index];
                    const link = info.startsWith("http")
                        ? info
                        : `https://${info}`;
                    return (
                        <div key={label}>
                            <a href={link} target="_blank" rel="noreferrer">
                                {info}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PersonalPreview;
