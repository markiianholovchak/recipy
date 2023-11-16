import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { SearchResults } from "../../components/SearchResults";
import { ContentContainer } from "../../components/UI/ContentContainer";
import { Suspense } from "react";
import { Loader } from "../../components/UI/Loader";

export const Search = () => {
    const { category } = useParams();
    const [params] = useSearchParams();
    const keyphrase = params.get("keyphrase");

    if (!keyphrase || !category) return null;
    return (
        <main className="flex-1">
            <ContentContainer>
                <Suspense fallback={<Loader />}>
                    <SearchResults keyphrase={keyphrase} category={category} />
                </Suspense>
            </ContentContainer>
        </main>
    );
};
