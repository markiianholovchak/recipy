import { AiOutlinePlus } from "react-icons/ai";
type AddRecipeButtonProps = {
    onClick: () => void;
};
export const AddRecipeButton = ({ onClick }: AddRecipeButtonProps) => {
    return (
        <button
            className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-green-75"
            onClick={onClick}
        >
            <AiOutlinePlus fontSize={"2.5rem"} className="text-green-500" />
        </button>
    );
};
