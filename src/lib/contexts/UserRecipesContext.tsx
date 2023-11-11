import { createContext, useContext, useEffect, useState } from "react";
import storage from "../storage";
import { USER_RECIPES_STORAGE_KEY } from "../constants/recipe.constants";

interface MyContextType {
    userRecipes: RecipeInformation[];
    updateUserRecipes: (newRecipes: RecipeInformation[]) => void;
    addUserRecipe: (recipe: RecipeInformation) => void;
    deleteUserRecipe: (id: number) => void;
}

const UserRecipesContext = createContext<MyContextType | undefined>(undefined);

export const useUserRecipesContext = () => {
    const context = useContext(UserRecipesContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
};

interface MyProviderProps {
    children: React.ReactNode;
}

export const UserRecipesContextProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [userRecipes, setUserRecipes] = useState<RecipeInformation[]>([]);

    const saveToStorage = (recipes: RecipeInformation[]) => {
        storage.setItem(USER_RECIPES_STORAGE_KEY, recipes);
    };

    const updateUserRecipes = (newData: RecipeInformation[]) => {
        setUserRecipes(newData);
        saveToStorage(newData);
    };

    const addUserRecipe = (recipe: RecipeInformation) => {
        const newRecipes = [...userRecipes, { ...recipe, id: new Date().getTime() }];
        setUserRecipes(newRecipes);
        saveToStorage(newRecipes);
    };

    const deleteUserRecipe = (id: number) => {
        const newRecipes = userRecipes.filter(recipe => !(recipe.id === id));
        setUserRecipes(newRecipes);
        saveToStorage(newRecipes);
    };

    useEffect(() => {
        const getStorageRecipes = async () => {
            const storageData = await storage.getItem(USER_RECIPES_STORAGE_KEY);
            if (storageData) {
                updateUserRecipes([...userRecipes, ...(storageData as RecipeInformation[])]);
            }
        };
        getStorageRecipes();
    }, []);

    return (
        <UserRecipesContext.Provider
            value={{
                userRecipes,
                updateUserRecipes,
                addUserRecipe,
                deleteUserRecipe
            }}
        >
            {children}
        </UserRecipesContext.Provider>
    );
};
