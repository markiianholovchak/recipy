import { CategoryRecipesRow } from "../../components/CategoryRecipesRow";
import { Footer } from "../../components/Footer";
import { ContentContainer } from "../../components/UI/ContentContainer";

export const Home = () => {
    return (
        <>
            <main>
                <ContentContainer>
                    <div className="flex flex-col gap-10">
                        <CategoryRecipesRow />
                        <CategoryRecipesRow />
                        <CategoryRecipesRow />
                    </div>
                </ContentContainer>
            </main>
            <Footer />
        </>
    );
};
