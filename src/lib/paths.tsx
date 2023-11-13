import { EMPTY_CATEGORY_KEYWORD } from "./constants/general.constants";

export const PATH_HOME = "/";
export const PATH_SAVED = "/saved";
export const PATH_RECIPE_DETAILS_BASE = "/recipe";
export const PATH_RECIPE_DETAILS = (id: string) => PATH_RECIPE_DETAILS_BASE + "/" + id;
export const PATH_SEARCH_BASE = "/recipes";
export const PATH_SEARCH = (category = EMPTY_CATEGORY_KEYWORD, keyphrase: string) =>
    PATH_SEARCH_BASE + `/${category}?keyphrase=${keyphrase}`;
