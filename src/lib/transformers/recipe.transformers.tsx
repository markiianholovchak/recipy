import { CUISINES } from "../constants/recipe.constants";

export const spoonacularRecipeToRecipe = (
    spoonacularRecipe: SpoonacularRecipeInformation
): RecipeInformation => {
    const {
        id,
        title,
        image,
        servings,
        readyInMinutes,
        pricePerServing,
        cuisines,
        dairyFree,
        glutenFree,
        instructions,
        vegan,
        vegetarian,
        dishTypes,
        summary,
        extendedIngredients
    } = spoonacularRecipe;
    return {
        id,
        title,
        image,
        servings,
        readyInMinutes,
        pricePerServing,
        cuisines,
        dairyFree,
        glutenFree,
        instructions,
        vegan,
        vegetarian,
        dishTypes,
        summary,
        extendedIngredients
    };
};

export const cuisinesToOptions = (): Option[] => {
    return CUISINES.map(cuisine => ({ value: cuisine, label: cuisine }));
};
