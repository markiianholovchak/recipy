import { Button, Input, Textarea } from "@material-tailwind/react";
import { FormEvent } from "react";
import { useReducer } from "react";
import { EMPTY_RECIPE } from "../../lib/constants/recipe.constants";
import {
    isDishTypesValid,
    isReadyInMinutesValid,
    isRecipeFormValid,
    isServingsValid,
    isSummaryValid,
    isTitleValid
} from "../../lib/validators/recipeForm.validators";
import { CategorySelect } from "../CategorySelect";
import { FormField } from "./FormField";
import { useUserRecipesContext } from "../../lib/contexts/UserRecipesContext";
import { CheckboxGroup } from "../CheckboxGroup";
import { cuisinesToOptions } from "../../lib/transformers/recipe.transformers";
import { RadioGroup } from "../RadioGroup";

const recipeReducer = (state: Partial<RecipeInformation>, action: RecipeReducerAction) => {
    switch (action.type) {
        case "change_title": {
            return {
                ...state,
                title: action.value
            };
        }
        case "change_instructions": {
            return {
                ...state,
                instructions: action.value
            };
        }
        case "change_category": {
            return {
                ...state,
                dishTypes: action.value ? [action.value] : []
            };
        }
        case "change_summary": {
            return {
                ...state,
                summary: action.value
            };
        }
        case "change_prepTime": {
            if (!action.value?.length) {
                return {
                    ...state,
                    readyInMinutes: undefined
                };
            }
            const newValue = action.value.length ? parseFloat(action.value) : undefined;

            return {
                ...state,
                readyInMinutes: newValue && isNaN(newValue) ? state.readyInMinutes : newValue
            };
        }
        case "change_servings": {
            if (!action.value?.length) {
                return {
                    ...state,
                    servings: undefined
                };
            }
            const newValue = action.value.length ? parseFloat(action.value) : undefined;

            return {
                ...state,
                servings: newValue && isNaN(newValue) ? state.servings : newValue
            };
        }
        case "clear_data": {
            return {
                ...EMPTY_RECIPE
            };
        }
        case "change_cuisines": {
            return {
                ...state,
                cuisines: action.value
            };
        }
        case "change_vegetarian": {
            return {
                ...state,
                vegetarian: action.value === "true"
            };
        }
        case "change_shortIngredients": {
            return {
                ...state,
                shortIngredients: action.value
            };
        }
    }
};

type RecipeFormProps = {
    onCancel?: () => void;
    onSave?: () => void;
};

export const RecipeForm = ({ onCancel, onSave }: RecipeFormProps) => {
    const [state, dispatch] = useReducer(recipeReducer, EMPTY_RECIPE);
    const {
        title,
        summary,
        instructions,
        readyInMinutes,
        dishTypes,
        cuisines,
        vegetarian,
        shortIngredients,
        servings
    } = state;

    const { addUserRecipe } = useUserRecipesContext();

    const handleSaveRecipe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addUserRecipe(state as RecipeInformation);
        onSave?.();
    };

    const handleCancel = () => {
        onCancel?.();
        dispatch({ type: "clear_data" });
    };

    return (
        <form onSubmit={handleSaveRecipe}>
            <p className="text-2xl font-medium">Add Recipe</p>
            <div className="mt-4 flex w-[40$] max-w-[25rem] flex-col gap-4">
                <FormField
                    title="Title"
                    required
                    field={
                        <Input
                            value={title}
                            onChange={e =>
                                dispatch({ type: "change_title", value: e.target.value })
                            }
                            crossOrigin={""}
                            type="text"
                            placeholder="Ravioli in green sauce"
                        />
                    }
                    isValid={isTitleValid(title)}
                    invalidMessage="Title can not be empty"
                />
                <FormField
                    title="Category"
                    required
                    field={
                        <CategorySelect
                            value={dishTypes?.[0]}
                            onChange={value =>
                                dispatch({ type: "change_category", value: value || "" })
                            }
                        />
                    }
                    isValid={isDishTypesValid(dishTypes)}
                    invalidMessage="Choose one category"
                />
                <FormField
                    title="Ingredients"
                    field={
                        <Textarea
                            placeholder="Cucumber, tomatoes, red pepper..."
                            value={shortIngredients}
                            onChange={e =>
                                dispatch({ type: "change_shortIngredients", value: e.target.value })
                            }
                        />
                    }
                />
                <FormField
                    title="Short recipe description"
                    required
                    field={
                        <Textarea
                            value={summary}
                            onChange={e =>
                                dispatch({ type: "change_summary", value: e.target.value })
                            }
                        />
                    }
                    isValid={isSummaryValid(summary)}
                    invalidMessage="Summary can not be empty"
                />
                <FormField
                    title="Preparation description"
                    field={
                        <Textarea
                            value={instructions}
                            onChange={e =>
                                dispatch({ type: "change_instructions", value: e.target.value })
                            }
                        />
                    }
                />
                <FormField
                    title="Preparation time (min)"
                    field={
                        <Input
                            crossOrigin={""}
                            type="number"
                            value={readyInMinutes}
                            onChange={e =>
                                dispatch({ type: "change_prepTime", value: e.target.value })
                            }
                        />
                    }
                    isValid={isReadyInMinutesValid(readyInMinutes)}
                    invalidMessage="Must be a positive number"
                />
                <FormField
                    title="Servings"
                    field={
                        <Input
                            crossOrigin={""}
                            type="number"
                            value={servings}
                            onChange={e =>
                                dispatch({ type: "change_servings", value: e.target.value })
                            }
                        />
                    }
                    isValid={isServingsValid(servings)}
                    invalidMessage="Must be a positive number"
                />
                <FormField
                    title="Cuisines"
                    field={
                        <CheckboxGroup
                            value={cuisines || []}
                            onChange={value => dispatch({ type: "change_cuisines", value })}
                            options={cuisinesToOptions()}
                        />
                    }
                />
                <FormField
                    title="Vegetarian"
                    field={
                        <RadioGroup
                            name="vegetarian"
                            options={[
                                { value: "true", label: "Yes" },
                                { value: "false", label: "No" }
                            ]}
                            value={(!!vegetarian).toString()}
                            onChange={value => dispatch({ type: "change_vegetarian", value })}
                        />
                    }
                />
            </div>
            <div className="flex gap-2">
                <Button
                    className="mt-2 bg-green-400"
                    type="submit"
                    disabled={!isRecipeFormValid(state)}
                >
                    Save recipe
                </Button>
                <Button className="mt-2 bg-gray-500" onClick={handleCancel}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};
