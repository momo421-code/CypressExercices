/// <reference types="cypress" />

describe("Suite de test", () => {
  for (let i = 0; i < 5; i++) {
    beforeEach(() => {
      cy.visit("http://www.bose.fr");
      cy.get("#onetrust-accept-btn-handler").click();
    });

    it("should get Contact page", () => {
      cy.get(
        ":nth-child(2) > .list > .bose-list > .bose-l ist__list > :nth-child(2) > span > .bose-link"
      ).click();

      cy.contains("Nous contacter");
    });

    it("should get the cart", () => {
      cy.get(".bose-serviceBar2016__shoppingCartArea").click();
      cy.contains("cart");
    });
    it("should get help page", () => {
      cy.get(
        ":nth-child(2) > .list > .bose-list > .bose-list__list > :nth-child(1) > span > .bose-link"
      ).click();
      cy.contains("ASSISTANCE");
    });
  }
});
