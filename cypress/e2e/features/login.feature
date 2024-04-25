# 1 - criar meu cenario
Feature: Login
Eu como cliente
Quero fazer Login na aplicacao
Para fazer um pedido de compra

    Scenario: Login com campo e-mail vazio
        Given I am on Login screen
        When I click on Login
        Then I see the error message "E-mail inválido."

    Scenario: Login com senha vazio
        Given I am on Login screen
        And I Fill e-mail
        When I click on Login
        Then I see the error message "Senha inválida."

    Scenario: Login com Sucesso
        Given I am on Login screen
        And I Fill my credentials
        When I click on Login
        Then I see success message