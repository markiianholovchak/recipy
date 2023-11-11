import { USER_RECIPES_STORAGE_KEY } from "../constants/recipe.constants";
import storage from "../storage";

export const getUserRecipes = async (): Promise<RecipeInformation[] | null> => {
    return await storage.getItem(USER_RECIPES_STORAGE_KEY);
};
export const getUserRecipe = async (id: number): Promise<RecipeInformation | null> => {
    const userRecipes = await getUserRecipes();
    if (!userRecipes) return null;
    return userRecipes.find(recipe => recipe.id === id) || null;
};
