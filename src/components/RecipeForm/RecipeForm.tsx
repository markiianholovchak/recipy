import { Button, Input, Textarea } from "@material-tailwind/react";
import { FormEvent } from "react";
import { useReducer } from "react";
import { EMPTY_RECIPE } from "../../lib/constants/recipe";
import {
    isDishTypesValid,
    isReadyInMinutesValid,
    isRecipeFormValid,
    isSummaryValid,
    isTitleValid
} from "../../lib/validators/recipeForm.validators";
import { CategorySelect } from "../CategorySelect";
import { FormFiled } from "./FormField";

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
        case "clear_data": {
            return {
                ...EMPTY_RECIPE
            };
        }
    }
};

type RecipeFormProps = {
    onCancel?: () => void;
};

export const RecipeForm = ({ onCancel }: RecipeFormProps) => {
    const [state, dispatch] = useReducer(recipeReducer, EMPTY_RECIPE);
    const { title, summary, instructions, readyInMinutes, dishTypes } = state;
    const handleSaveRecipe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleCancel = () => {
        onCancel?.();
        dispatch({ type: "clear_data" });
    };

    return (
        <form onSubmit={handleSaveRecipe}>
            <p className="text-2xl font-medium">Add Recipe</p>
            <div className="mt-4 flex w-[40$] max-w-[25rem] flex-col gap-4">
                <FormFiled
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
                <FormFiled
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
                <FormFiled
                    title="Ingredients"
                    field={<Textarea placeholder="Cucumber, tomatoes, red pepper..." />}
                />
                <FormFiled
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
                <FormFiled
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
                <FormFiled
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