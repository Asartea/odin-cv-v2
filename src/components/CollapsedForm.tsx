import { Data } from "../App";

type CollapsedFormProps = {
    data: Data;
    dataKey: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

function CollapsedForm({ data, dataKey, onClick }: CollapsedFormProps) {
    return (
        <div
            className="collapsed-form"
            data-key={dataKey}
            data-type={data.type}
            onClick={onClick}
        >
            {data.type === "education" ? (
                <h3>{data.data.school}</h3>
            ) : data.type === "work-experience" ? (
                <h3>{data.data.company}</h3>
            ) : null}
        </div>
    );
}

export default CollapsedForm;
