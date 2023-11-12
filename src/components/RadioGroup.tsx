import { Radio } from "@material-tailwind/react";

type RadioGroupProps = {
    name: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
};
export const RadioGroup = ({ value, onChange, options, name }: RadioGroupProps) => {
    return (
        <div>
            {options.map(option => (
                <Radio
                    crossOrigin={""}
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    label={option.label}
                    onChange={() => {
                        onChange(option.value);
                    }}
                    ripple={false}
                />
            ))}
        </div>
    );
};
