context("Register", () => {
    it("Enters the landing page and tries to go to the register page", () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)



        cy.get("input[name=cep]").type(14057140)
        cy.get("button[name=button-search]").click()
    })
})