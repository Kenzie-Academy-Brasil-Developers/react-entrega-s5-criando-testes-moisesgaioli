import { screen, render } from "@testing-library/react"
import Search from "../components/Search"

describe("Input Search", () => {
    test("Deve renderizar o input", () => {
        render(<Search/>)

        expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy()
    })
})