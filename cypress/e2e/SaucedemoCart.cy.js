/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
describe("Cart", () => {
  it("Add to cart products and checkout", () => {
    //authentification
    cy.login("standard_user", "secret_sauce");

    //achat produits
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .should("be.visible")
      .click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
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

    //authentification
    cy.get('[data-test="title"]').should("be.visible");
    //informations utilisateurs
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let zipCode = faker.location.zipCode();
    cy.userForm(firstName, lastName, zipCode);
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
