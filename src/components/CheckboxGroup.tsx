import { Checkbox } from "@material-tailwind/react";
import { useState } from "react";

type CheckboxGroupProps = {
    value: string[];
    onChange: (value: string[]) => void;
    options: Option[];
};
export const CheckboxGroup = ({ options, onChange }: CheckboxGroupProps) => {
    const [value, setValue] = useState<string[]>([]);
    const handleChange = (optionValue: string) => {
        if (value.includes(optionValue)) {
            const newValue = value.filter(value => value !== optionValue);
            setValue(newValue);
            onChange(newValue);
            return;
        }
        const newValue = [...value, optionValue];
        setValue(newValue);
        onChange(newValue);
    };
    return (
        <div>
            {options.map(option => (
                <Checkbox
                    crossOrigin={""}
                    ripple={false}
                    value={option.value}
                    label={option.label}
                    checked={value.includes(option.value)}
                    onChange={() => handleChange(option.value)}
                />
            ))}
        </div>
    );
};
