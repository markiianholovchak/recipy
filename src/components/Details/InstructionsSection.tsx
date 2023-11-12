import { GiCook } from "react-icons/gi";
import { GreenSubHeading } from "../UI/GreenSubHeading";

type InstructionsSectionProps = {
    instructions: string;
};
export const InstructionsSection = ({ instructions }: InstructionsSectionProps) => {
    return (
        <>
            <GreenSubHeading title="Instructions" icon={<GiCook fontSize={25} />} />
            <p className="mt-4">{instructions}</p>
        </>
    );
};
