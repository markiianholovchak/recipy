import { Divider } from "../UI/Divider";
import { SectionHeading } from "../UI/SectionHeading";
import { SmallSectionHeading } from "../UI/SmallSectionHeading";
import { ImagePlaceholder } from "../UI/ImagePlaceholder";
import { useSavedRecipesContext } from "../../lib/contexts/SavedRecipesContext";
import { SaveRecipe } from "./SaveRecipe";
import { GreenSubHeading } from "../UI/GreenSubHeading";
import { GiCook } from "react-icons/gi";
import { BiFoodMenu, BiBowlRice } from "react-icons/bi";
import { IngredientsList } from "./IngredientsList";
import { BsClockHistory } from "react-icons/bs";
import { getDurationStringFromDuration } from "../../lib/utils/general.utils";
import { useRecipe } from "../../lib/hooks/data/useRecipe";
import { FaKitchenSet } from "react-icons/fa6";
import { TbMeatOff } from "react-icons/tb";

type DetailsProps = {
    recipeId: string;
};
export const Details = ({ recipeId }: DetailsProps) => {
    const { addRecipeToSaved, deleteRecipeFromSaved } = useSavedRecipesContext();
    const { data: recipe } = useRecipe(parseFloat(recipeId as string), {
        suspense: true,
        revalidateIfStale: false,
        revalidateOnFocus: false
    });

    if (!recipe) return null;
    return (
        <div>
            <SectionHeading title={recipe.dishTypes[0]} titleClasses={"text-xl text-green-400"} />
            <h1 className="text-center text-3xl font-light">{recipe.title}</h1>
            <div className="my-5 flex flex-col gap-4 md:flex-row">
                <div className="flex min-h-[20rem] w-full justify-center">
                    {recipe.image ? (
                        <img
                            className="h-[20rem] w-auto rounded-md object-cover md:h-[25rem]"
                            src={recipe.image}
                        />
                    ) : (
                        <ImagePlaceholder />
                    )}
                </div>
            </div>
            <Divider />
            <div className="my-4 flex justify-center gap-10">
                <div className="flex flex-col items-center gap-1">
                    <BsClockHistory fontSize={36} />
                    <p className="text-sm uppercase">Prepare Time</p>
                    <p>{getDurationStringFromDuration(recipe.readyInMinutes)}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <BiBowlRice fontSize={36} />
                    <p className="text-sm uppercase">Portions</p>
                    <p>{recipe.servings}</p>
                </div>
                {recipe.vegetarian && (
                    <div className="flex flex-col items-center gap-1">
                        <TbMeatOff fontSize={36} />
                        <p className="text-sm uppercase">Vegetarian</p>
                    </div>
                )}
            </div>
            <Divider />
            <div className="my-8 flex flex-col items-center gap-5 bg-green-75 px-5 py-10 text-center md:px-16">
                <SmallSectionHeading title="Recipe description" />
                <p className="" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            </div>
            <Divider />
            <div className="my-8">
                <SmallSectionHeading title="Preparation Description" />
                {!!recipe.cuisines.length && (
                    <>
                        <GreenSubHeading title="Cuisines" icon={<FaKitchenSet fontSize={25} />} />
                        <p className="mt-4">{recipe.cuisines.join(", ")}</p>
                    </>
                )}
                {!!recipe.shortIngredients && (
                    <>
                        <GreenSubHeading
                            title="Short ingredients list"
                            icon={<BiFoodMenu fontSize={25} />}
                        />
                        <p>{recipe.shortIngredients}</p>
                    </>
                )}

                {!!recipe.extendedIngredients?.length && (
                    <>
                        <GreenSubHeading title="Ingredients" icon={<BiFoodMenu fontSize={25} />} />
                        <IngredientsList ingredients={recipe.extendedIngredients} />
                    </>
                )}

                {recipe.instructions && (
                    <>
                        <GreenSubHeading title="Instructions" icon={<GiCook fontSize={25} />} />
                        <p
                            className="mt-4"
                            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                        ></p>
                    </>
                )}
            </div>
            <Divider className="mb-4" />
            <SaveRecipe
                recipeId={recipe.id}
                handleSave={() => addRecipeToSaved(recipe)}
                handleUnSave={() => deleteRecipeFromSaved(recipe.id)}
            />
        </div>
    );
};
