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

type RecipeReducerActionTypeWithValue =
    | "change_title"
    | "change_category"
    | "change_summary"
    | "change_instructions"
    | "change_prepTime"
    | "change_category";

type RecipeReducerActionType = "clear_data";

type RecipeReducerAction =
    | {
          type: RecipeReducerActionTypeWithValue;
          value: string;
      }
    | {
          type: RecipeReducerActionType;
      };
