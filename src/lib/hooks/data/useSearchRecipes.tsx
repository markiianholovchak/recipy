import { RecipesClient } from "../../recipesClient";
import useSWR, { Fetcher, SWRConfiguration } from "swr";

export const useSearchRecipes = (
    params: SearchRecipeParams,
    offset = 0,
    pageSize = 10,
    options?: SWRConfiguration
) => {
    const fetcher: Fetcher<SpoonacularRecipeSearchResult | undefined, string> = async () => {
        return RecipesClient.searchRecipes(params, offset, pageSize);
    };

    return useSWR(RecipesClient.API_RECIPE_SEARCH_URL(params, offset, pageSize), fetcher, options);
};
