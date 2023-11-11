import { RecipeForm } from "../../components/RecipeForm/RecipeForm";
import { AddRecipeButton } from "../../components/UI/AddRecipeButton";
import { ContentContainer } from "../../components/UI/ContentContainer";
import { RecipeCard } from "../../components/UI/RecipeCard";
import { SectionHeading } from "../../components/UI/SectionHeading";
import { useDisclosure } from "../hooks/useDisclosure";

export const Saved = () => {
    const formDisclosure = useDisclosure();
    return (
        <ContentContainer>
            <div className="flex flex-col gap-5">
                <div>
                    <SectionHeading title="Saved Recipes" />
                    <div className=" grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>

                <div>
                    <SectionHeading title="My Recipes" />
                    <div className=" grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <div className=" flex items-center justify-center">
                            <AddRecipeButton onClick={formDisclosure.onOpen} />
                        </div>
                    </div>
                </div>
                {formDisclosure.isOpen && <RecipeForm onCancel={formDisclosure.onClose} />}
            </div>
        </ContentContainer>
    );
};
