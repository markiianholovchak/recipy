import { useParams } from "react-router-dom";
import { Details } from "../../components/Details/Details";
import { Suspense } from "react";
import { Spinner } from "@material-tailwind/react";
import { ContentContainer } from "../../components/UI/ContentContainer";

export const RecipeDetails = () => {
    const { recipeId } = useParams();

    return (
        <main>
            <ContentContainer>
                <Suspense fallback={<Spinner />}>
                    <Details recipeId={recipeId as string} />
                </Suspense>
            </ContentContainer>
        </main>
    );
};
