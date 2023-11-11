import { Select, Option } from "@material-tailwind/react";
import { RECIPE_CATEGORIES } from "../lib/constants/recipe";

type CategorySelectProps = {
    value?: string;
    onChange: (value?: string) => void;
};

export const CategorySelect = ({ value, onChange }: CategorySelectProps) => {
    const handleChange = (value?: string) => onChange(value);
    return (
        <Select value={value} onChange={handleChange}>
            {RECIPE_CATEGORIES.map(category => (
                <Option key={category} value={category}>
                    {category}
                </Option>
            ))}
        </Select>
    );
};
