import { Divider } from "../UI/Divider";
import { SectionHeading } from "../UI/SectionHeading";
// import { useRecipe } from "../../lib/hooks/data/useRecipe";
import { SmallSectionHeading } from "../UI/SmallSectionHeading";
import { IngredientsSection } from "./IngredientsSection";
import { InstructionsSection } from "./InstructionsSection";
import { ImagePlaceholder } from "../UI/ImagePlaceholder";
// import { GiForkKnifeSpoon } from "react-icons/gi";
import { Macro } from "./Macro";
import { KnifeForkIcon } from "../../assets/KnifeForkIcon";
import { useSavedRecipesContext } from "../../lib/contexts/SavedRecipesContext";
import { SaveRecipe } from "./SaveRecipe";
import { MOCK_RECIPE } from "../../lib/mock/data";

type DetailsProps = {
    recipeId: string;
};
export const Details = ({ recipeId }: DetailsProps) => {
    const { addRecipeToSaved, deleteRecipeFromSaved } = useSavedRecipesContext();
    // const { data: recipe } = useRecipe(parseFloat(recipeId as string), { suspense: true });
    const recipe = MOCK_RECIPE;
    console.log(recipe, recipeId);
    if (!recipe) return null;
    return (
        <div>
            <SectionHeading title={recipe.dishTypes[0]} titleClasses={"text-xl text-green-400"} />
            <h1 className="text-center text-3xl font-light">{recipe.title}</h1>

            <div className="my-5 flex flex-col gap-4 md:flex-row">
                <div className="h-[20rem] md:w-[50%]">
                    {recipe.image ? (
                        <img className="h-full w-full object-cover" src={recipe.image} />
                    ) : (
                        <ImagePlaceholder />
                    )}
                </div>
                <div className="flex flex-1 flex-col items-center gap-4">
                    <div className="flex w-max items-center justify-center rounded-full bg-green-75 p-4">
                        <KnifeForkIcon
                            width={"3rem"}
                            height={"3rem"}
                            className=" text-green-400"
                            color=""
                        />
                    </div>
                    <Macro />
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 bg-green-75 py-10">
                <SmallSectionHeading title="Short recipe description" />
                <p>{recipe.summary}</p>
            </div>
            <div className="my-8">
                <SmallSectionHeading title="Preparation Description" />
                <IngredientsSection />
                <InstructionsSection instructions={recipe.instructions} />
            </div>
            <Divider />

            <SaveRecipe
                recipeId={recipe.id}
                handleSave={() => addRecipeToSaved(recipe)}
                handleUnSave={() => deleteRecipeFromSaved(recipe.id)}
            />
        </div>
    );
};
