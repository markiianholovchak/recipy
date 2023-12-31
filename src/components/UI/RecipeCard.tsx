import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { getDurationStringFromDuration } from "../../lib/utils/general.utils";
import { useNavigate } from "react-router-dom";
import { PATH_RECIPE_DETAILS } from "../../lib/paths";
import { ImagePlaceholder } from "./ImagePlaceholder";

type RecipeCardProps = {
    recipe: RecipeInformation;
    handleDelete?: () => void;
};
export const RecipeCard = ({ recipe, handleDelete }: RecipeCardProps) => {
    const [hasImageLoaded, setHasImageLoaded] = useState(false);
    const navigate = useNavigate();

    const handleGoToRecipeDetails = () => {
        navigate(PATH_RECIPE_DETAILS(recipe.id.toString()));
    };

    return (
        <div
            className="relative flex w-[15rem] cursor-pointer flex-col gap-2"
            onClick={handleGoToRecipeDetails}
        >
            <div className=" h-[15rem] rounded-md bg-gray-200 object-contain">
                {recipe.image ? (
                    <img
                        src={recipe.image || "/assets/cheesecake.jpg"}
                        className={`h-full w-full rounded-md object-cover ${
                            hasImageLoaded ? "" : "blur-xl"
                        }`}
                        onLoad={() => setHasImageLoaded(true)}
                    />
                ) : (
                    <ImagePlaceholder />
                )}
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xl">
                    <p className="truncate font-medium text-green-500">{recipe.dishTypes[0]}</p>
                    <p className="flex items-center gap-1 font-light">
                        <AiOutlineClockCircle />
                        {getDurationStringFromDuration(recipe.readyInMinutes)}
                    </p>
                </div>
                <p className="truncate text-xl font-semibold">{recipe.title}</p>
            </div>
            {handleDelete && (
                <IconButton
                    className=" absolute right-2 top-2 bg-green-400"
                    ripple={false}
                    onClick={e => {
                        e.stopPropagation();
                        handleDelete();
                    }}
                >
                    X
                </IconButton>
            )}
        </div>
    );
};
