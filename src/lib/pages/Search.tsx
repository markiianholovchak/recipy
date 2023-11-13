import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { SearchResults } from "../../components/SearchResults";
import { ContentContainer } from "../../components/UI/ContentContainer";

export const Search = () => {
    const { category } = useParams();
    const [params] = useSearchParams();
    const keyphrase = params.get("keyphrase");

    if (!keyphrase || !category) return null;
    return (
        <main>
            <ContentContainer>
                <SearchResults keyphrase={keyphrase} category={category} />
            </ContentContainer>
        </main>
    );
};
