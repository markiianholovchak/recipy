import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { Home } from "./lib/pages/Home";
import { PATH_HOME, PATH_RECIPE_DETAILS_BASE, PATH_SAVED } from "./lib/paths";
import "react-multi-carousel/lib/styles.css";
import { Saved } from "./lib/pages/Saved";
import { Footer } from "./components/Footer";
import { UserRecipesContextProvider } from "./lib/contexts/UserRecipesContext";
import { Header } from "./components/Header";
import { RecipeDetails } from "./lib/pages/RecipeDetails";
import { SavedRecipesContextProvider } from "./lib/contexts/SavedRecipesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <UserRecipesContextProvider>
                <SavedRecipesContextProvider>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path={PATH_HOME} element={<Home />} />
                            <Route path={PATH_SAVED} element={<Saved />} />
                            <Route
                                path={PATH_RECIPE_DETAILS_BASE + "/:recipeId"}
                                element={<RecipeDetails />}
                            />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </SavedRecipesContextProvider>
            </UserRecipesContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
