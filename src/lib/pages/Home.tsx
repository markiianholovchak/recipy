import { CategoryRecipesRow } from "../../components/CategoryRecipesRow";

export const Home = () => {
    return (
        <div>
            <div className="flex flex-col gap-10 px-[2rem] md:px-[5rem] 2xl:px-[10rem]">
                <CategoryRecipesRow />
                <CategoryRecipesRow />
                <CategoryRecipesRow />
            </div>
        </div>
    );
};
