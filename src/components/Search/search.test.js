import { screen, render } from "@testing-library/react"
import Search from "./index"

describe("Input Search", () => {
    test("Deve renderizar o input", () => {
        render(<Search/>)

        expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy()
    })
})