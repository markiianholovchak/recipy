export const isTitleValid = (title?: string) => {
    return !!title && !!title.trim().length;
};
export const isSummaryValid = (summary?: string) => {
    return !!summary && !!summary.trim().length;
};

export const isReadyInMinutesValid = (readyInMinutes?: number) => {
    return !!readyInMinutes && readyInMinutes > 0;
};

export const isServingsValid = (servings?: number) => {
    return !!servings && servings > 0;
};

export const isDishTypesValid = (dishTypes?: string[]) => {
    return dishTypes && !!dishTypes.length;
};

export const isRecipeFormValid = (recipe: Partial<RecipeInformation>) => {
    return (
        isTitleValid(recipe.title) &&
        isSummaryValid(recipe.summary) &&
        isReadyInMinutesValid(recipe.readyInMinutes) &&
        isDishTypesValid(recipe.dishTypes) &&
        isServingsValid(recipe.servings)
    );
};
