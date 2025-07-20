const cadastroElements = require('../elements/CadastroElements');

class CadastroPage {
  acessarCadastro() {
    cy.get(cadastroElements.btnAcessarCadastro()).click();
  }

  preencherNome(nome) {
    cy.get(cadastroElements.inputNome()).type(nome, { force: true });
  }

  preencherEmail(email) {
    cy.get(cadastroElements.inputEmail()).type(email, { force: true });
  }

  preencherSenha(senha) {
    cy.get(cadastroElements.inputSenha()).type(senha, { force: true });
  }

  preencherConfirmarSenha(senha) {
    cy.get(cadastroElements.inputConfirmarSenha()).type(senha, { force: true });
  }

  selecionarSaldo() {
    cy.get(cadastroElements.checkboxSaldo()).click({ force: true });
  }

  clicarCadastrar() {
    cy.get(cadastroElements.btnCadastrar()).click({ force: true });
  }

  validarMensagemSucesso() {
    cy.get(cadastroElements.modalSucesso()).should('contain.text', 'foi criada com sucesso');
  }

  fecharModal() {
    cy.get(cadastroElements.btnFecharModal()).click();
  }
}

module.exports = new CadastroPage();
