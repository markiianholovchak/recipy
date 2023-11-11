import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { Home } from "./lib/pages/Home";
import { PATH_HOME, PATH_SAVED } from "./lib/paths";
import "react-multi-carousel/lib/styles.css";
import { Saved } from "./lib/pages/Saved";
import { Footer } from "./components/Footer";

const router = createBrowserRouter([
    {
        path: PATH_HOME,
        element: <Home />
    },
    {
        path: PATH_SAVED,
        element: <Saved />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
            <Footer />
        </ThemeProvider>
    </React.StrictMode>
);
