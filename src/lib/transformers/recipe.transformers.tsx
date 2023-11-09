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
        summary
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
        summary
    };
};
