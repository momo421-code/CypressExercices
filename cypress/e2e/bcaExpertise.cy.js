/// <reference types="cypress" />

describe("Connexion", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.visit("http://www.bca.fr");
    cy.wait(3000);
    cy.get(".moove-gdpr-infobar-reject-btn").click();
    cy.get(".d-lg-flex > .d-flex > .btn").should("have.value", "Votre espace");
    cy.get(".d-lg-flex > .d-flex > .btn")
      .should("contain", "Votre espace")
      .click();
    cy.get("#myspaceModalLabel").should("contain", "Accéder à votre espace");
  });

  it("should get connexion page for an issuing insurer ", () => {
    cy.get(
      ":nth-child(1) > .block > .card-space > .d-flex > .block-title"
    ).click();
  });

  it("should get customer area for an issuing insured person ", () => {
    cy.get(
      ":nth-child(4) > .block > .card-space > .d-flex > .block-title"
    ).click();
  });
});
describe("Contact", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.visit("http://www.bca.fr");
    cy.wait(3000);
    cy.get(".moove-gdpr-infobar-reject-btn").click();
  });
  it("should get contact page", () => {
    cy.get("#menu-item-66 > .nav-link").should("contain", "Contact").click();
    cy.get("#menu-item-2653 > .dropdown-item").click();
    cy.get(".wrapper-content").should("contain", "Contactez-nous");
  });
  it("should read FAQ", () => {
    cy.get("#menu-item-66 > .nav-link").should("contain", "Contact").click();
    cy.get("#menu-item-2512 > .dropdown-item").should("be.visible").click();
  });
});
