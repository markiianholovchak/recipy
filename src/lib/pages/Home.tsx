import { CategoryRecipesRow } from "../../components/CategoryRecipesRow";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContentContainer } from "../../components/UI/ContentContainer";

export const Home = () => {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
};
