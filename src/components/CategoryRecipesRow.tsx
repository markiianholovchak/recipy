import { Button } from "@material-tailwind/react";
import { RecipesCarousel } from "./UI/RecipesCarousel";

export const CategoryRecipesRow = () => {
    return (
        <div className="flex flex-col gap-10">
            <p className="text-2xl font-medium uppercase">Soups</p>
            <div className="">
                <RecipesCarousel />
            </div>

            <Button className="w-max rounded-md bg-green-400" ripple={false}>
                View more...
            </Button>
            <div className="h-[1px] w-full bg-black"></div>
        </div>
    );
};
