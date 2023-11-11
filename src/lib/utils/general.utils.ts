import { MINUTES_IN_HOUR } from "../constants/general.constants";

export const getDurationStringFromDuration = (duration: number): string => {
    let durationString = "";
    const hours = Math.floor(duration / MINUTES_IN_HOUR);
    const minutes = duration % MINUTES_IN_HOUR;

    if (hours) {
        durationString += `${hours}h`;
    }
    if (minutes) {
        durationString += `${hours ? " " : ""}${minutes}m`;
    }

    return durationString;
};
