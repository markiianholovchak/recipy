import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useSavedRecipesContext } from "../../lib/contexts/SavedRecipesContext";

type SaveRecipeProps = {
    recipeId: number;
    handleSave?: () => void;
    handleUnSave?: () => void;
};
export const SaveRecipe = ({ recipeId, handleSave, handleUnSave }: SaveRecipeProps) => {
    const { getIsRecipySaved } = useSavedRecipesContext();
    const isRecipySaved = getIsRecipySaved(recipeId);
    return (
        <div
            className="flex cursor-pointer items-center gap-2 text-3xl"
            onClick={isRecipySaved ? handleUnSave : handleSave}
        >
            {!isRecipySaved ? (
                <>
                    <BsBookmark /> Save recipe
                </>
            ) : (
                <>
                    <BsFillBookmarkFill /> Unsave
                </>
            )}
        </div>
    );
};
