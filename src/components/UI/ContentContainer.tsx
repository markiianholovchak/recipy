import { PropsWithChildren } from "react";

export const ContentContainer = ({ children }: PropsWithChildren) => {
    return <div className="px-[2rem] md:px-[5rem] 2xl:px-[10rem]">{children}</div>;
};
