import "../styles/Button.css";

type ButtonProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
    className?: string;
    disabled?: boolean;
};

function Button({ onClick, text, className, disabled }: ButtonProps) {
    return (
        <button onClick={onClick} className={className} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;
