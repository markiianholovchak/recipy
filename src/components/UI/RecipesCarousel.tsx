import Carousel from "react-multi-carousel";

import { RecipeCard } from "./RecipeCard";
export const RecipesCarousel = () => {
    const responsive = {
        "2xl": {
            breakpoint: { max: 4000, min: 1850 },
            items: 6,
            slidesToSlide: 6
        },
        xl: {
            breakpoint: { max: 1850, min: 1600 },
            items: 5,
            slidesToSlide: 5
        },
        md: {
            breakpoint: { max: 1600, min: 1150 },
            items: 4,
            slidesToSlide: 4
        },
        sm: {
            breakpoint: { max: 1150, min: 950 },
            items: 3,
            slidesToSlide: 3
        },
        xs: {
            breakpoint: { max: 950, min: 570 },
            items: 2,
            slidesToSlide: 2
        },
        default: {
            breakpoint: { max: 570, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <Carousel responsive={responsive} swipeable itemClass="flex justify-center">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />

            <RecipeCard />
        </Carousel>
    );
};
