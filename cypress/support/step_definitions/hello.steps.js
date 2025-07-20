const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário acessa a página inicial", () => {
  cy.visit("/");
});

Then("a página deve exibir o botão de login", () => {
  cy.contains("Acessar").should("be.visible");
});
