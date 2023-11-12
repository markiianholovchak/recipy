export const sortIngredientsByAisle = (ingredients: SpoonacularExtendedIngredient[]) => {
    return ingredients.reduce(
        (acc, curr) => {
            const aisleIndex = acc.findIndex(acc => acc.name === curr.aisle);

            if (aisleIndex === -1) {
                return [...acc, { name: curr.aisle, ingredients: [curr] }];
            }

            acc[aisleIndex].ingredients.push(curr);

            return acc;
        },
        [] as { name: string; ingredients: SpoonacularExtendedIngredient[] }[]
    );
};
