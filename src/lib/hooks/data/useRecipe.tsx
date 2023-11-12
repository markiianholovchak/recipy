// import { RecipesClient } from "../../recipesClient";
import useSWR, { Fetcher, SWRConfiguration } from "swr";
import { getUserRecipe } from "../../calls/recipe.calls";

export const useRecipe = (recipeId: RecipeID, options?: SWRConfiguration) => {
    const fetcher: Fetcher<RecipeInformation | undefined, string> = async id => {
        const userRecipe = await getUserRecipe(recipeId);
        if (userRecipe) return userRecipe;
        console.log(id);
        return;
        // const recipe = await RecipesClient.getRecipe(parseInt(id));
        // return recipe;
    };

    return useSWR(recipeId.toString(), fetcher, options);
};
