import { configureStore } from "@reduxjs/toolkit";
import favorito from "./reducers/favorito";

export const setupStore = (preloadedState) =>
    configureStore({
        reducer: {
            favorito,
        },
        preloadedState,
    });

const store = setupStore();

export default store;