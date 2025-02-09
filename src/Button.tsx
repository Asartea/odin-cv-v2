import React from "react";

type ButtonProps = {
    onClick: () => void;
    text: string;
    className?: string;
};

function Button({ onClick, text, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
}

export default Button;
