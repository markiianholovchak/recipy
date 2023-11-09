import { RecipesClient } from "../../recipesClient";
import useSWR, { Fetcher, SWRConfiguration } from "swr";

export const useRecipe = (recipeId: RecipeID, options?: SWRConfiguration) => {
    const fetcher: Fetcher<RecipeInformation | undefined, string> = async id => {
        const recipe = await RecipesClient.getRecipe(parseInt(id));
        return recipe;
    };

    return useSWR(recipeId.toString(), fetcher, options);
};
