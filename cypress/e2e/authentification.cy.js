/// <reference types="cypress" />

it("authentification ok", () => {
  cy.visit("/");
  cy.login("standard_user", "secret_sauce");
  // Verifier que j'ai été correctement connecté
});

it("authentification ko", () => {
  cy.visit("/");
  cy.login("stanrd_user", "secret_sauce");
  // Verifier que j'ai un message d'erreur
});
