/// <reference types="cypress" />

describe("Cart", () => {
  it("Add to cart products and checkout", () => {
    cy.visit("/");
    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get('[data-test="password"]')
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible")
      .click();

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .should("be.visible")
      .click();
    cy.get('[data-test="shopping-cart-link"]').should("contain", 2).click();
    cy.get('[data-test="title"]')
      .should("be.visible")
      .and("have.text", "Your Cart");
    cy.get('[data-test="cart-list"]').should("contain", 2);
    cy.get('[data-test="checkout"]')
      .should("be.visible")
      .and("have.text", "Checkout")
      .click();
    cy.get('[data-test="title"]').should("be.visible");
    cy.get('[data-test="firstName"]').should("be.visible").type("Mohamed");
    cy.get('[data-test="lastName"]').should("be.visible").type("ATA");
    cy.get('[data-test="postalCode"]').should("be.visible").type("92000");
    cy.get('[data-test="continue"]').should("contain", "Continue").click();
    cy.get('[data-test="title"]')
      .should("be.visible")
      .and("contain", "Checkout");
    cy.get('[data-test="cart-list"]').should("contain", 2);
    cy.get('[data-test="payment-info-label"]').should(
      "contain",
      "Payment Information"
    );
    cy.get('[data-test="shipping-info-label"]').should(
      "contain",
      "Shipping Information"
    );
    cy.get('[data-test="total-info-label"]').should("contain", "Price Total");
    cy.get('[data-test="total-label"]')
      .should("be.visible")
      .and("contain", "Total");
    cy.get('[data-test="cancel"]').should("be.visible");
    cy.get('[data-test="finish"]')
      .should("be.visible")
      .and("contain", "Finish")
      .click();
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("contain", "Thank you for your order!");
    cy.get('[data-test="complete-text"]').should("be.visible");
  });
});
