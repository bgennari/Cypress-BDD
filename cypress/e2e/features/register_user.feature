# 1 - criar meu cenario

Feature: Register User
Eu como cliente
Quero fazer Registro na aplicacao
Para fazer um pedido de compra

    Background: Access register screen
    Given I am on Register screen

    Scenario: Campo Nome vazio
        When I click on register
        Then I see message "O campo nome deve ser prenchido"

    Scenario: Campo e-mail vazio
        And I fill name
        When I click on register
        Then I see message "O campo e-mail deve ser prenchido corretamente"


    Scenario: Campo e-mail invalido
        And I fill name
        When I click on register
        Then I see message "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo senha vazio
        And I fill name
        And I fill e-mail
        When I click on register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos"


    Scenario: Campo senha invalido
        And I fill name
        And I fill e-mail
        And I fill invalid password
        When I click on register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos"


    Scenario: Cadastro de usuario com sucesso
        And I fill my datas of register
        When I click on register
        Then I see success message "Cadastro realizado!"

