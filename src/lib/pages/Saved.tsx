import { RecipeForm } from "../../components/RecipeForm/RecipeForm";
import { AddRecipeButton } from "../../components/UI/AddRecipeButton";
import { ContentContainer } from "../../components/UI/ContentContainer";
import { RecipeCard } from "../../components/UI/RecipeCard";
import { SectionHeading } from "../../components/UI/SectionHeading";
import { useSavedRecipesContext } from "../contexts/SavedRecipesContext";
import { useUserRecipesContext } from "../contexts/UserRecipesContext";
import { useDisclosure } from "../hooks/useDisclosure";

export const Saved = () => {
    const formDisclosure = useDisclosure();
    const { userRecipes, deleteUserRecipe } = useUserRecipesContext();
    const { savedRecipes, deleteRecipeFromSaved } = useSavedRecipesContext();

    return (
        <main>
            <ContentContainer>
                <div className="flex flex-col gap-5">
                    <div>
                        <SectionHeading title="Saved Recipes" />
                        <div className=" grid grid-cols-[repeat(auto-fit,15rem)] gap-4">
                            {savedRecipes.map((recipe, index) => (
                                <RecipeCard
                                    key={index}
                                    recipe={recipe}
                                    handleDelete={() => deleteRecipeFromSaved(recipe.id)}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <SectionHeading title="My Recipes" />
                        <div className=" grid grid-cols-[repeat(auto-fit,15rem)] gap-4">
                            {userRecipes.map((recipe, index) => (
                                <RecipeCard
                                    key={index}
                                    recipe={recipe}
                                    handleDelete={() => deleteUserRecipe(recipe.id)}
                                />
                            ))}

                            <div className=" flex items-center justify-center">
                                <AddRecipeButton onClick={formDisclosure.onOpen} />
                            </div>
                        </div>
                    </div>
                    {formDisclosure.isOpen && (
                        <RecipeForm
                            onCancel={formDisclosure.onClose}
                            onSave={formDisclosure.onClose}
                        />
                    )}
                </div>
            </ContentContainer>
        </main>
    );
};
