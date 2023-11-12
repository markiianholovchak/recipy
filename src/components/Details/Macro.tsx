type MacroElementProps = {
    title: string;
    amount: string;
};
const MacroElement = ({ title, amount }: MacroElementProps) => {
    return (
        <div className="flex justify-between gap-20 bg-green-100 px-4 text-xl">
            <p>{title}</p>
            <p>{amount}</p>
        </div>
    );
};
export const Macro = () => {
    return (
        <div className="flex flex-col gap-6 border border-green-100 bg-green-75 py-4">
            <MacroElement title="Proteins" amount="2g" />
            <MacroElement title="Carbohydrates" amount="2g" />
            <MacroElement title="Fats" amount="2g" />
        </div>
    );
};
