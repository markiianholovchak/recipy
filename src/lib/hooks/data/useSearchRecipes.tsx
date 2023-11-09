import { RecipesClient } from "../../recipesClient";
import { useDebounce } from "../useDebounce";
import useSWR, { Fetcher, SWRConfiguration } from "swr";

export const useSearchRecipes = (searchValue: string, options?: SWRConfiguration) => {
    const debounceDelay = 300;
    const debouncedSearchValue = useDebounce<string>(searchValue, debounceDelay);

    const fetcher: Fetcher<SpoonacularRecipeSearchResult | undefined, string> = async value => {
        if (value.trim().length < 1) return undefined;
        return RecipesClient.searchRecipes(value);
    };

    return useSWR(debouncedSearchValue, fetcher, options);
};
