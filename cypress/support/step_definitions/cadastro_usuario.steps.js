const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const cadastro = require("../../e2e/pages/CadastroPage");

Given("que o usuário acessa a página de cadastro", () => {
  cy.visit("/");
  cadastro.acessarCadastro();
});

When("preencher o nome com {string}", (nome) => {
  cadastro.preencherNome(nome);
});

When("preencher o email com {string}", (email) => {
  cadastro.preencherEmail(email);
});

When("preencher a senha com {string}", (senha) => {
  cadastro.preencherSenha(senha);
});

When("preencher a confirmação de senha com {string}", (senha) => {
  cadastro.preencherConfirmarSenha(senha);
});

When("ativar a opção {string}", () => {
  cadastro.selecionarSaldo();
});

When("clicar no botão {string}", () => {
  cadastro.clicarCadastrar();
});

Then("a conta deve ser criada com saldo de R$ 1.000,00", () => {
  cadastro.validarMensagemSucesso();
});

Then("deve ser exibido o número da conta criada", () => {
  // Aqui podemos validar que o modal contém "número da conta"
  cadastro.validarMensagemSucesso();
  cadastro.fecharModal();
});

Then("deve ser exibida a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});
