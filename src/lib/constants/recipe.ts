export const EMPTY_RECIPE: RecipeInformation = {
    id: 0,
    title: "",
    image: "",
    servings: 0,
    readyInMinutes: 0,
    pricePerServing: 0,
    cuisines: [],
    dairyFree: false,
    glutenFree: false,
    instructions: "",
    vegan: false,
    vegetarian: false,
    dishTypes: [],
    summary: ""
};

export const RECIPE_CATEGORIES = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink"
];
