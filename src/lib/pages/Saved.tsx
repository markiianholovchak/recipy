import { AddRecipeButton } from "../../components/UI/AddRecipeButton";
import { ContentContainer } from "../../components/UI/ContentContainer";
import { RecipeCard } from "../../components/UI/RecipeCard";
import { SectionHeading } from "../../components/UI/SectionHeading";

export const Saved = () => {
    return (
        <div className="flex flex-col gap-5">
            <ContentContainer>
                <SectionHeading title="Saved Recipes" />
                <div className=" grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </ContentContainer>
            <ContentContainer>
                <SectionHeading title="My Recipes" />

                <div className=" grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <div className=" flex items-center justify-center">
                        <AddRecipeButton />
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
};
