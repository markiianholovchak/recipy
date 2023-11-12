import { ReactNode } from "react";

export const GreenSubHeading = ({ title, icon }: { title: string; icon: ReactNode }) => {
    return (
        <p className="mt-10 flex w-max items-center gap-2 rounded-md bg-green-75 p-3">
            {icon}
            {title}
        </p>
    );
};
