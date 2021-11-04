import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Search from "../../components/Search"
import Providers from "../../providers";
import api from "../../services"
import MockAdapter from "axios-mock-adapter";


const apiMock = new MockAdapter(api)

describe("Find CEP", () => {
    test("Deve achar o endereço", async () => {
        apiMock.onGet("/v1/cep/").replyOnce(200, {})
        render(
            <Providers>
                <Search/>
            </Providers>
        )   

        const searchInput = screen.getByPlaceholderText("Insira o CEP")
        const searchButton = screen.getByText("Buscar pelo CEP")

        fireEvent.change(searchInput, { target: { value: 14057140 }})
        fireEvent.click(searchButton)
        
        await waitFor(() => {
            expect(searchInput).toHaveValue(14057140)
        })
    })
})