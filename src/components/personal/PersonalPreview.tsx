import { PersonalData } from "../../App";
type PersonalPreviewProps = {
    personal: PersonalData;
};

function PersonalPreview({ personal }: PersonalPreviewProps) {
    const { firstName, lastName, email, phone, website, linkedin, github } =
        personal;
    const contactInfo = [
        { label: email, value: email, type: "email" },
        { label: phone, value: phone, type: "tel" },
        { label: website, value: website, type: "url" },
        { label: "LinkedIn", value: linkedin, type: "url" },
        { label: "GitHub", value: github, type: "url" },
    ];
    return (
        <div className="personal-preview">
            <h1>
                {firstName} {lastName}
            </h1>
            <div className="contact-info">
                {contactInfo.map(({ label, value, type }) =>
                    type === "email" ? (
                        <a key={label} href={`mailto:${value}`}>
                            {label}
                        </a>
                    ) : type === "tel" ? (
                        <a key={label} href={`tel:${value}`}>
                            {label}
                        </a>
                    ) : (
                        <a
                            key={label}
                            href={value}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {label}
                        </a>
                    ),
                )}
            </div>
        </div>
    );
}

export default PersonalPreview;
