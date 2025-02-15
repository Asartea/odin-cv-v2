import { Data } from "../App";

type CollapsedFormProps = {
    data: Data;
    dataKey: string;
    title: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

function CollapsedForm({ data, dataKey, onClick, title }: CollapsedFormProps) {
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
