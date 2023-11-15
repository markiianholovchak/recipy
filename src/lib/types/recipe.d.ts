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
    extendedIngredients: SpoonacularExtendedIngredient[];
    summary: string;
    shortIngredients?: string;
};

type RecipeReducerActionTypeWithStringValue =
    | "change_title"
    | "change_category"
    | "change_summary"
    | "change_instructions"
    | "change_shortIngredients"
    | "change_prepTime"
    | "change_category"
    | "change_servings"
    | "change_vegetarian";

type RecipeReducerActionType = "clear_data";

type RecipeReducerAction =
    | {
          type: RecipeReducerActionTypeWithStringValue;
          value: string;
      }
    | {
          type: RecipeReducerActionType;
      }
    | {
          type: "change_cuisines";
          value: string[];
      };

type SearchRecipeParams = {
    query?: string;
    type?: string;
    sort?: string;
};
