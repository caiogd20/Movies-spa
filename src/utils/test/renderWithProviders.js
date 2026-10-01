
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { setupStore } from "../../store";

export function renderWithProviders(ui, extendedRenderOptions = {}) {
    const {
        preloadedState,
        store = setupStore(preloadedState),
        route = "/",
        queryClient = new QueryClient({
            defaultOptions: { queries: { retry: false } },
        }),
        ...renderOptions
    } = extendedRenderOptions;
    const Wrapper = ({ children }) => (
        <MemoryRouter initialEntries={[route]}>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>{children}</Provider>
            </QueryClientProvider>
        </MemoryRouter>
    );

    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}