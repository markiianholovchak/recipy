import { AiOutlineClockCircle } from "react-icons/ai";
export const RecipeCard = () => {
    return (
        <div className="flex w-[15rem] flex-col gap-2">
            <div className=" h-[15rem] rounded-md bg-gray-200 object-contain">
                <img
                    src="/assets/cheesecake.jpg"
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xl">
                    <p className="font-medium text-green-500">Desserts</p>
                    <p className="flex items-center gap-1 font-light">
                        <AiOutlineClockCircle />
                        1h 30m
                    </p>
                </div>
                <p className="text-2xl font-semibold">Mini cheesecake</p>
            </div>
        </div>
    );
};
