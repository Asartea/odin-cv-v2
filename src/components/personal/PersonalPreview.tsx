import { PersonalData } from "../../App";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/16/solid";

type PersonalPreviewProps = {
    personal: PersonalData;
};
import "../../styles/PersonalPreview.css";

function PersonalPreview({ personal }: PersonalPreviewProps) {
    const { firstName, lastName, email, phone, website, linkedin, github } =
        personal;
    const contactInfo = [
        { label: email, value: email, type: "email", icon: EnvelopeIcon },
        { label: phone, value: phone, type: "tel", icon: PhoneIcon },
        { label: website, value: website, type: "url", icon: LinkIcon },
        { label: "LinkedIn", value: linkedin, type: "url", icon: LinkIcon },
        { label: "GitHub", value: github, type: "url", icon: LinkIcon },
    ];
    return (
        <div className="personal-preview">
            <h1>
                {firstName} {lastName}
            </h1>
            <div className="contact-info">
                {contactInfo.map(({ label, value, type, icon: Icon }) =>
                    !value ? null : type === "email" ? (
                        <a key={label} href={`mailto:${value}`}>
                            {Icon && <Icon className="icon" />}
                            {label}
                        </a>
                    ) : type === "tel" ? (
                        <a key={label} href={`tel:${value}`}>
                            {Icon && <Icon className="icon" />}
                            {label}
                        </a>
                    ) : (
                        <a
                            key={label}
                            href={
                                value.startsWith("http")
                                    ? value
                                    : `https://${value}`
                            }
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {Icon && <Icon className="icon" />}
                            {label}
                        </a>
                    ),
                )}
            </div>
        </div>
    );
}

export default PersonalPreview;
