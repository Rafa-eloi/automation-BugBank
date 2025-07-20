Feature: Cadastro de novo usuário

  Como um novo usuário
  Quero me cadastrar no sistema
  Para poder acessar minha conta bancária

  Background:
    Given que o usuário acessa a página de cadastro

  
  Scenario: Cadastro com todos os campos preenchidos e saldo ativado
    When preencher o nome com "Rafael Teste"
    And preencher o email com "rafael@email.com"
    And preencher a senha com "senha123"
    And preencher a confirmação de senha com "senha123"
    And ativar a opção "Criar conta com saldo"
    And clicar no botão "Cadastrar"
    Then a conta deve ser criada com saldo de R$ 1.000,00
    And deve ser exibido o número da conta criada

Scenario: Cadastro sem preencher nome
  Given que o usuário acessa a página de cadastro
  When preencher o email com "rafael@email.com"
  And preencher a senha com "senha123"
  And preencher a confirmação de senha com "senha123"
  And ativar a opção "Criar conta com saldo"
  And clicar no botão "Cadastrar"
  Then deve ser exibida a mensagem "Nome não pode ser vazio"

Scenario: Cadastro sem preencher email
  Given que o usuário acessa a página de cadastro
  When preencher o nome com "Rafael Teste"
  And preencher a senha com "senha123"
  And preencher a confirmação de senha com "senha123"
  And ativar a opção "Criar conta com saldo"
  And clicar no botão "Cadastrar"
  Then deve ser exibida a mensagem "Email não pode ser vazio"

Scenario: Cadastro sem preencher senha
  Given que o usuário acessa a página de cadastro
  When preencher o nome com "Rafael Teste"
  And preencher o email com "rafael@email.com"
  And preencher a confirmação de senha com "senha123"
  And ativar a opção "Criar conta com saldo"
  And clicar no botão "Cadastrar"
  Then deve ser exibida a mensagem "Senha não pode ser vazio"

Scenario: Cadastro sem preencher confirmação de senha
  Given que o usuário acessa a página de cadastro
  When preencher o nome com "Rafael Teste"
  And preencher o email com "rafael@email.com"
  And preencher a senha com "senha123"
  And ativar a opção "Criar conta com saldo"
  And clicar no botão "Cadastrar"
  Then deve ser exibida a mensagem "Confirmar senha não pode ser vazio"

Scenario: Cadastro com senha e confirmação diferentes
  Given que o usuário acessa a página de cadastro
  When preencher o nome com "Rafael Teste"
  And preencher o email com "rafael@email.com"
  And preencher a senha com "senha123"
  And preencher a confirmação de senha com "senhaErrada"
  And ativar a opção "Criar conta com saldo"
  And clicar no botão "Cadastrar"
  Then deve ser exibida a mensagem "As senhas devem ser iguais"
