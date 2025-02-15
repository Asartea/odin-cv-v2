function PrettyPrintDescription({ description }: { description: string }) {
    const descriptionLines = description
        .split("\n")
        .filter(Boolean)
        .map((line) => line.replaceAll("-", "").trim());
    return (
        <ul>
            {descriptionLines.map((line, index) => (
                <li key={index}>{line}</li>
            ))}
        </ul>
    );
}

export default PrettyPrintDescription;
