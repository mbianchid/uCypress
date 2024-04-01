

class Header {
    userLoggedIn(userNome) {
        cy.get('header a strong', { timeout: 7000 })
            .should('be.visible')
            .should('have.text', userNome)
    }
}

export default new Header();