import { CategoryRecipesRow } from "../../components/CategoryRecipesRow";
import { ContentContainer } from "../../components/UI/ContentContainer";
import { Divider } from "../../components/UI/Divider";

export const Home = () => {
    return (
        <main className="my-[5rem]">
            <ContentContainer>
                <div className="flex flex-col gap-10">
                    <CategoryRecipesRow />
                    <Divider />
                    <CategoryRecipesRow />
                    <Divider />
                    <CategoryRecipesRow />
                </div>
            </ContentContainer>
        </main>
    );
};
