// 2 - Transformar o Gherkin em metodo/acao

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page'
import login_page from "../pages/login_page"

const email = 'bruno@qazando.com'
const password = '123456'

Given("I am on Login screen", () => {
    home_page.accessLogin()

})

Given("I Fill e-mail", () => {
    login_page.fillemail(email)

})
Given("I Fill my credentials", () => {
    login_page.fillemail(email)
    login_page.fillpassword(password)

})

When("I click on Login", () => {
    login_page.doLogin()
})

Then("I see the error message {string}", (message) => {
    login_page.checkErrorMessage(message)
})

Then("I see success message", () => {
    login_page.successmessage(email)
})