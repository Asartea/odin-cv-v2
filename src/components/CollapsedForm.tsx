import { Data } from "../App";

type CollapsedFormProps = {
    data: Data;
    dataKey: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

function CollapsedForm({ data, dataKey, onClick }: CollapsedFormProps) {
    let title;
    switch (data.type) {
        case "education":
            title = data.data.school;
            break;
        case "work-experience":
            title = data.data.company;
            break;
        case "projects":
            title = data.data.title;
            break;
        default:
            title = "";
    }
    return (
        <div
            className="collapsed-form"
            data-key={dataKey}
            data-type={data.type}
            onClick={onClick}
        >
            {title && <h3>{title}</h3>}
        </div>
    );
}

export default CollapsedForm;
