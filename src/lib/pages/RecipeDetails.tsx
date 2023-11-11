import { useParams } from "react-router-dom";

import { useRecipe } from "../hooks/data/useRecipe";
import { ContentContainer } from "../../components/UI/ContentContainer";
import { SectionHeading } from "../../components/UI/SectionHeading";
import { Divider } from "../../components/UI/Divider";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

const DetailsSectionHeading = ({ title }: { title: string }) => {
    return <p className="text-center uppercase">{title}</p>;
};

export const RecipeDetails = () => {
    const { recipeId } = useParams();
    const { data: recipe } = useRecipe(parseFloat(recipeId as string));
    if (!recipe) return null;
    return (
        <main>
            <ContentContainer>
                <SectionHeading
                    title={recipe.dishTypes[0]}
                    titleClasses={"text-xl text-green-400"}
                />
                <h1 className="text-center text-3xl font-light">{recipe.title}</h1>

                <div className="flex flex-col items-center gap-5 bg-green-75 py-10">
                    <DetailsSectionHeading title="Short recipe description" />
                    <p>{recipe.summary}</p>
                </div>
                <div className="my-8">
                    <DetailsSectionHeading title="Preparation Description" />
                    <div className="w-max rounded-md bg-green-75 p-3">Ingredients</div>
                    <div className="w-max rounded-md bg-green-75 p-3">Instructions</div>
                </div>
                <Divider />

                <div className="flex items-center gap-2">
                    <BsBookmark /> Save recipe
                </div>
                <BsFillBookmarkFill />
            </ContentContainer>
        </main>
    );
};
