import { RecipesClient } from "../../recipesClient";
import { useDebounce } from "../useDebounce";
import useSWR, { Fetcher, SWRConfiguration } from "swr";

export const useSearchRecipes = (
    searchValue: string,
    offset = 0,
    pageSize = 10,
    options?: SWRConfiguration
) => {
    const debounceDelay = 300;
    const debouncedSearchValue = useDebounce<string>(searchValue, debounceDelay);

    const fetcher: Fetcher<SpoonacularRecipeSearchResult | undefined, string> = async () => {
        if (searchValue.trim().length < 1) return undefined;
        return RecipesClient.searchRecipes(searchValue, offset, pageSize);
    };

    return useSWR(debouncedSearchValue + offset + pageSize, fetcher, options);
};
