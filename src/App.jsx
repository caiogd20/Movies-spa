import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCliente = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30 * 1000,
            retry: false,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryCliente}>
            <Provider store={store}>
                <RouterProvider router={routes} />
            </Provider>
        </QueryClientProvider>
    );
}
