// criar as acoes da page

/// <reference types="cypress" />

export default {
    accessRegister(){
        cy.visit ('/')
        .get('#top_header')
        cy.get('.fa-lock')
        .click()
    }
}   