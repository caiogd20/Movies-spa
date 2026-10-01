import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/RootLayout/RootLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                lazy: async () => {
                    const module = await import("./views/Home/Home");
                    return { Component: module.default };
                },
            },
            {
                path: "movies",
                lazy: async () => {
                    const module = await import("./views/Movies/Movies");
                    return { Component: module.default };
                },
            },
            {
                path: "movies/:movieId",
                lazy: async () => {
                    const module = await import("./views/Movie/Movie");
                    return { Component: module.default };
                },
            },
            {
                path: "favoritos",
                lazy: async () => {
                    const module = await import("./views/Favoritos/Favoritos");
                    return { Component: module.default };
                },
            },
        ],
    },
]);