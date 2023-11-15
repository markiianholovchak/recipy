import { RecipesCarousel } from "./UI/RecipesCarousel";
import { useSearchRecipes } from "../lib/hooks/data/useSearchRecipes";

type CategoryRecipesRowProps = {
    category: string;
};

export const CategoryRecipesRow = ({ category }: CategoryRecipesRowProps) => {
    const { data: recipes } = useSearchRecipes(
        { type: category, sort: "random" },
        undefined,
        undefined,
        { suspense: true, revalidateIfStale: false, revalidateOnFocus: false }
    );
    if (!recipes) return null;
    return (
        <div className="flex flex-col gap-10">
            <p className="text-2xl font-medium uppercase">{category}</p>
            <div className="">
                <RecipesCarousel recipes={recipes.results} />
            </div>
        </div>
    );
};
