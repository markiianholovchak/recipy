type RecipeID = number;

type RecipeInformation = {
    id: RecipeID;
    title: string;
    image: string;
    servings: number;
    readyInMinutes: number;
    pricePerServing: number;
    cuisines: string[];
    dairyFree: boolean;
    glutenFree: boolean;
    instructions: string;
    vegan: boolean;
    vegetarian: boolean;
    dishTypes: string[];
    summary: string;
};
