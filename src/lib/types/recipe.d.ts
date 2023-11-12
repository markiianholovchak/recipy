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
};

type RecipeReducerActionTypeWithStringValue =
    | "change_title"
    | "change_category"
    | "change_summary"
    | "change_instructions"
    | "change_prepTime"
    | "change_category"
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
