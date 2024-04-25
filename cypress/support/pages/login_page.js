// 3 - criar as acoes da page

/// <reference types="cypress" />

export default {
    doLogin(){
        cy.get ('#btnLogin').click()
    },


    checkErrorMessage(message) {
        cy.get('.invalid_input').should('have.text',message)
    },

    fillemail(email) {
        cy.get('#user').type(email)
    },

    fillpassword(password) {
        cy.get('#password').type(password)
    },

    successmessage(email) {
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text','Login realizado')

        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá, ${email}`)
    }
}