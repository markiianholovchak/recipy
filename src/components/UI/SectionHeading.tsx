type SectionHeadingProps = {
    title: string;
};
export const SectionHeading = ({ title }: SectionHeadingProps) => {
    return (
        <div className="my-5 flex flex-col justify-center gap-2">
            <div className="flex flex-col items-center">
                <div className="h-[3px] w-[7rem] bg-green-100"></div>
                <div className="h-[1px] w-[11rem] bg-green-100"></div>
            </div>
            <p className="text-center text-4xl">{title}</p>
        </div>
    );
};
