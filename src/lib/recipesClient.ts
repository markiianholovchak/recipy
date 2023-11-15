export class RecipesClient {
    private static API_KEY = process.env.REACT_APP_RECIPES_API_KEY as string;
    private static API_BASE_URL = "https://api.spoonacular.com/recipes";
    private static API_RECIPE_INFORMATION_URL = (id: RecipeID) =>
        this.API_BASE_URL + `/${id}/information?` + new URLSearchParams({ apiKey: this.API_KEY });
    static API_RECIPE_SEARCH_URL = (params: SearchRecipeParams, offset = 0, pageSize = 10) =>
        this.API_BASE_URL +
        "/complexSearch?" +
        new URLSearchParams({
            ...params,
            apiKey: this.API_KEY,
            addRecipeInformation: "true",
            pageSize: pageSize.toString(),
            offset: offset.toString()
        });

    static getRecipe = async (id: RecipeID): Promise<SpoonacularRecipeInformation | undefined> => {
        try {
            const response = await fetch(this.API_RECIPE_INFORMATION_URL(id));
            if (!response.ok) {
                throw new Error("Could not fetch information for the recipe with id: " + id);
            }
            return await response.json();
        } catch (e) {
            console.error(e);
            return;
        }
    };

    static searchRecipes = async (
        params: SearchRecipeParams,
        offset = 0,
        pageSize = 10
    ): Promise<SpoonacularRecipeSearchResult | undefined> => {
        try {
            console.log(this.API_RECIPE_SEARCH_URL(params, offset, pageSize));
            const response = await fetch(this.API_RECIPE_SEARCH_URL(params, offset, pageSize));
            if (!response.ok) {
                throw new Error("Could not fetch recipes for the given params");
            }
            return await response.json();
        } catch (e) {
            console.error(e);
            return;
        }
    };
}
