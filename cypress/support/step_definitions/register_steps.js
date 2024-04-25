// 2 - Transformar o Gherkin em metodo/acao

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_register from '../pages/home_register'
import register_page from "../pages/register_page"
import { data } from "cypress/types/jquery"

const name = 'Bruno QA'
const email = 'bruno@qazando.com'
const password = '123456'

Given("I am on Register screen", () => {
    home_register.accessRegister()

})

Given("I fill name", () => {
    register_page.fillname(name)

})
Given("I fill e-mail", () => {
    register_page.fillemail(email)

})

Given("I fill invalid password", () => {
    register_page.fillinvalidpassword('123')

})

Given("I fill my datas of register", () => {
    register_page.datasofregister(data)

})

Given("I fill my credentials", () => {
    register_page.fillemail(email)
    register_page.fillpassword(password)

})

When("I click on register", () => {
    register_page.doRegister()
})

Then("I see message {string}" ,(message) => {
    register_page.checkErrorMessage(message)
})

Then("I see success message", () => {
    register_page.successmessage(name)
})