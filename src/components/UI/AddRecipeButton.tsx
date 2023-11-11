import { AiOutlinePlus } from "react-icons/ai";
export const AddRecipeButton = () => {
    return (
        <button className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-green-75">
            <AiOutlinePlus fontSize={"2.5rem"} className="text-green-500" />
        </button>
    );
};
