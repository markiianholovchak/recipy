import { sortIngredientsByAisle } from "../../lib/utils/ingredients.utils";

type IngredientsListProps = {
    ingredients: SpoonacularExtendedIngredient[];
};

const IngredientsAisle = ({
    name,
    ingredients
}: {
    name: string;
    ingredients: SpoonacularExtendedIngredient[];
}) => {
    return (
        <div>
            <p className="text-xs uppercase">{name}</p>
            <ul className=" list-inside list-disc">
                {ingredients.map(ingredient => {
                    return <li>{ingredient.original}</li>;
                })}
            </ul>
        </div>
    );
};

export const IngredientsList = ({ ingredients }: IngredientsListProps) => {
    const ingredientsByAisles = sortIngredientsByAisle(ingredients);
    return (
        <div className="mt-8 flex flex-col gap-4">
            {ingredientsByAisles.map(aisle => (
                <IngredientsAisle {...aisle} />
            ))}
        </div>
    );
};
