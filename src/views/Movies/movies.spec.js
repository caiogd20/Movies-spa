import { screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import Movies from "./Movies";
import { renderWithProviders } from "../../utils/test/renderWithProviders";

jest.mock("../../hooks/useMovies.js",()=>({
    useMovies:()=>({
        data:[
            {
                id:1,
                title:"Filme sobre o React",
                poster_path:"image.png"
            }
        ]
    }) 
}))

describe("<Movies/>", () => {
    it("renderiza os filmes", () => {
        renderWithProviders(<Movies />);
        expect(screen.getByRole("heading", { name: "Filme sobre o React" })).toBeInTheDocument();
    })
})