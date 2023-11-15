// import { Input } from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { PATH_SEARCH } from "../lib/paths";
import { EMPTY_CATEGORY_KEYWORD } from "../lib/constants/general.constants";

export const SearchBar = () => {
    const [params] = useSearchParams();
    const keyphrase = params.get("keyphrase");
    const [query, setQuery] = useState(keyphrase || "");
    const navigate = useNavigate();
    const { category } = useParams();
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(PATH_SEARCH(category || EMPTY_CATEGORY_KEYWORD, query));
    };
    return (
        <form
            className="flex w-full items-center gap-2 rounded-full bg-green-50 p-2"
            onSubmit={handleSearch}
        >
            <BsSearch fontSize={30} className="ml-2" />
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="What will we cook..."
                className="flex-1 bg-transparent  text-lg font-extralight outline-none placeholder:text-gray-400"
            />

            <button
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-400"
                type="submit"
            >
                <BsArrowRightShort fontSize={40} color="white" />
            </button>
        </form>
    );
};
