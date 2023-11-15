import { useState } from "react";
import { SEARCH_RESULTS_PAGE_SIZE } from "../lib/constants/recipe.constants";
import { useSearchRecipes } from "../lib/hooks/data/useSearchRecipes";
import { Pagination } from "./Pagination";
import { RecipeCard } from "./UI/RecipeCard";

type SearchResultsProps = {
    category: string;
    keyphrase: string;
};
export const SearchResults = ({ keyphrase }: SearchResultsProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useSearchRecipes(
        { query: keyphrase },
        (currentPage - 1) * SEARCH_RESULTS_PAGE_SIZE,
        SEARCH_RESULTS_PAGE_SIZE,
        { suspense: true }
    );
    if (!data) return <p>No found recipes!</p>;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <div className=" my-8 grid grid-cols-[repeat(auto-fit,15rem)] justify-center gap-4">
                {data.results.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
            <div className="flex justify-center">
                <Pagination
                    totalPages={Math.ceil(data.totalResults / SEARCH_RESULTS_PAGE_SIZE)}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};
