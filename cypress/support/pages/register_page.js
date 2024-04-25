// 3 - criar as acoes da page

/// <reference types="cypress" />

const name = 'Bruno QA'
const email = 'bruno@qazando.com'
const password = '123456'

export default {
    doRegister(){
        cy.get ('#btnRegister').click()
    },


    checkErrorMessage(message) {
        cy.get('#errorMessageFirstName').should('have.text',message)
    },
    
    fillname(name) {
        cy.get('#user').type(name)
    },

    fillemail(email) {
        cy.get('#email').type(email)
    },

    fillpassword(password) {
        cy.get('#password').type(password)
    },
    
    fillinvalidpassword(password) {
        cy.get('#password').type('123')
    },
    
    datasofregister() {
        cy.get('#user').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
    },

    successmessage(email) {
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text','Cadastro realizado!')

        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Bem-vindo, ${name}`)
    }
}   