import { CategoryRecipesRow } from "../../components/CategoryRecipesRow";
import { ContentContainer } from "../../components/UI/ContentContainer";

export const Home = () => {
    return (
        <main className="my-[5rem]">
            <ContentContainer>
                <div className="flex flex-col gap-10">
                    <CategoryRecipesRow />
                    <hr className="border-black" />
                    <CategoryRecipesRow />
                    <hr className="border-black" />
                    <CategoryRecipesRow />
                </div>
            </ContentContainer>
        </main>
    );
};
