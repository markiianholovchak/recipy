import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { Home } from "./lib/pages/Home";
import { HOME_PATH } from "./lib/paths";
import "react-multi-carousel/lib/styles.css";

const router = createBrowserRouter([
    {
        path: HOME_PATH,
        element: <Home />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
