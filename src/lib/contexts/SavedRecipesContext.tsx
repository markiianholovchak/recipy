import { createContext, useContext, useEffect, useState } from "react";
import { SAVED_RECIPES_STORAGE_KEY } from "../constants/recipe.constants";
import { getStorageRecipes, saveRecipesToStorage } from "../calls/recipe.calls";

interface MyContextType {
    savedRecipes: RecipeInformation[];
    updateSavedRecipes: (newRecipes: RecipeInformation[]) => void;
    addRecipeToSaved: (recipe: RecipeInformation) => void;
    deleteRecipeFromSaved: (id: number) => void;
    getIsRecipySaved: (id: number) => boolean;
}

const SavedRecipesContext = createContext<MyContextType | undefined>(undefined);

export const useSavedRecipesContext = () => {
    const context = useContext(SavedRecipesContext);
    if (!context) {
        throw new Error("useSavedRecipesContext must be used within a SavedRecipesContextProvider");
    }
    return context;
};

interface MyProviderProps {
    children: React.ReactNode;
}

export const SavedRecipesContextProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [savedRecipes, setSavedRecipes] = useState<RecipeInformation[]>([]);

    const saveToStorage = (recipes: RecipeInformation[]) => {
        saveRecipesToStorage(SAVED_RECIPES_STORAGE_KEY, recipes);
    };

    const updateSavedRecipes = (newData: RecipeInformation[]) => {
        setSavedRecipes(newData);
        saveToStorage(newData);
    };

    const addRecipeToSaved = (recipe: RecipeInformation) => {
        const newRecipes = [...savedRecipes, recipe];
        setSavedRecipes(newRecipes);
        saveToStorage(newRecipes);
    };

    const deleteRecipeFromSaved = (id: number) => {
        const newRecipes = savedRecipes.filter(recipe => !(recipe.id === id));
        setSavedRecipes(newRecipes);
        saveToStorage(newRecipes);
    };

    const getIsRecipySaved = (id: number) => savedRecipes.some(recipe => recipe.id === id);

    useEffect(() => {
        const getRecipesFromStorage = async () => {
            const storageData = await getStorageRecipes(SAVED_RECIPES_STORAGE_KEY);
            if (storageData) {
                updateSavedRecipes([...savedRecipes, ...(storageData as RecipeInformation[])]);
            }
        };
        getRecipesFromStorage();
    }, []);

    return (
        <SavedRecipesContext.Provider
            value={{
                savedRecipes,
                updateSavedRecipes,
                addRecipeToSaved,
                deleteRecipeFromSaved,
                getIsRecipySaved
            }}
        >
            {children}
        </SavedRecipesContext.Provider>
    );
};
