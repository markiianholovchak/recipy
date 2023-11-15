import { useParams } from "react-router-dom";
import { Details } from "../../components/Details/Details";
import { Suspense } from "react";
import { ContentContainer } from "../../components/UI/ContentContainer";
import { Loader } from "../../components/UI/Loader";

export const RecipeDetails = () => {
    const { recipeId } = useParams();

    return (
        <main>
            <ContentContainer>
                <Suspense fallback={<Loader />}>
                    <Details recipeId={recipeId as string} />
                </Suspense>
            </ContentContainer>
        </main>
    );
};
