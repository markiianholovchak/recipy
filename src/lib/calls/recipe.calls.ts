import { USER_RECIPES_STORAGE_KEY } from "../constants/recipe.constants";
import storage from "../storage";

export const getStorageRecipes = async (
    storageKey: string
): Promise<RecipeInformation[] | null> => {
    return await storage.getItem(storageKey);
};
export const getUserRecipe = async (id: number): Promise<RecipeInformation | null> => {
    const userRecipes = await getStorageRecipes(USER_RECIPES_STORAGE_KEY);
    if (!userRecipes) return null;
    return userRecipes.find(recipe => recipe.id === id) || null;
};

export const saveRecipesToStorage = async (storageKey: string, recipes: RecipeInformation[]) => {
    await storage.setItem(storageKey, recipes);
};
