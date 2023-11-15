import { Spinner } from "@material-tailwind/react";

export const Loader = () => {
    return (
        <div className="flex h-full w-full items-center justify-center p-4">
            <Spinner className="h-8 w-8" />
        </div>
    );
};
