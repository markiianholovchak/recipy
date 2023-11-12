import { ReactNode, useRef } from "react";

type FormFieldProps = {
    title: string;
    field: ReactNode;
    isValid?: boolean;
    invalidMessage?: string;
    required?: boolean;
};
export const FormField = ({ title, field, isValid, invalidMessage, required }: FormFieldProps) => {
    const wasTouched = useRef(false);
    return (
        <div className="flex flex-col gap-2">
            <p>
                {title}
                {required && <span className="text-red-500">*</span>}
                {wasTouched.current && !isValid && (
                    <span className="ml-2 font-extralight text-red-500">{invalidMessage}</span>
                )}
            </p>
            <span onClick={() => (wasTouched.current = true)}>{field}</span>
        </div>
    );
};
