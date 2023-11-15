import { ContentContainer } from "../../components/UI/ContentContainer";
import { Suspense } from "react";
import { CategoryRecipesRow } from "../../components/CategoryRecipesRow";
import { Divider } from "../../components/UI/Divider";
import { RECIPE_CATEGORIES } from "../constants/recipe.constants";
import { isEven } from "../utils/general.utils";
import { Loader } from "../../components/UI/Loader";

export const Home = () => {
    return (
        <main className="my-[5rem]">
            <ContentContainer>
                <div className="flex flex-col gap-10">
                    {RECIPE_CATEGORIES.slice(0, 3).map((category, index) => {
                        return (
                            <div key={category} className="flex flex-col gap-10">
                                {isEven(index + 1) && <Divider />}
                                <Suspense fallback={<Loader />}>
                                    <CategoryRecipesRow category={category} />
                                </Suspense>
                                {isEven(index + 1) && <Divider />}
                                {}
                            </div>
                        );
                    })}
                </div>
            </ContentContainer>
        </main>
    );
};
