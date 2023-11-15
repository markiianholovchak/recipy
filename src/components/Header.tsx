import { Button } from "@material-tailwind/react";
import { HEADER_NAVIGATION_LINKS } from "../lib/constants/nav.constants";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

type NavLinkProps = {
    link: NavigationLink;
};
const NavLink = ({ link }: NavLinkProps) => {
    if (link.isInternal)
        return (
            <Link to={link.link}>
                <Button variant="outlined" color="white">
                    {link.title}
                </Button>
            </Link>
        );
    return (
        <a href={link.link}>
            <Button variant="outlined" color="white">
                {link.title}
            </Button>
        </a>
    );
};

export const Header = () => {
    return (
        <header className="relative flex h-[45vh] w-full flex-col">
            <div className="z-1 absolute left-0 top-0 h-full w-full">
                <img src="/assets/header-bg.jpg" className=" h-full w-full object-cover"></img>
                <div className="absolute left-0 top-0 h-full w-full bg-green-500 opacity-[0.25]"></div>
            </div>
            <nav className="z-10 flex justify-between gap-2 px-6 py-8 font-light text-white">
                <Link className="text-2xl font-semibold" to={"/"}>
                    Recipy
                </Link>

                <div className="flex gap-2">
                    {HEADER_NAVIGATION_LINKS.map(link => (
                        <NavLink key={link.title} link={link} />
                    ))}
                </div>
            </nav>
            <div className="z-10 flex flex-1 items-center justify-center ">
                <div className="w-[85%] max-w-[35rem]">
                    <SearchBar />
                </div>
            </div>
        </header>
    );
};
