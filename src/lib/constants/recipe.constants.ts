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
    summary: "",
    extendedIngredients: []
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

export const CUISINES = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese"
];

export const USER_RECIPES_STORAGE_KEY = "user-recipes";
export const SAVED_RECIPES_STORAGE_KEY = "saved-recipes";
