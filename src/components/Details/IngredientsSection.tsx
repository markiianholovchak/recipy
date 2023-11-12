import { BiFoodMenu } from "react-icons/bi";
import { GreenSubHeading } from "../UI/GreenSubHeading";

export const IngredientsSection = () => {
    return (
        <>
            <GreenSubHeading title="Ingredients" icon={<BiFoodMenu fontSize={25} />} />
            <div>These are ingredients</div>
        </>
    );
};
