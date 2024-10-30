/// <reference types="cypress" />

describe("Exercice1", () => {
  it("Scenario1", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get('[data-test="password"]')
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  });
  it("Scenario2", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').type("standard_use");
    cy.get('[data-test="password"]').type("secret_sauc");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .should("contain.text", "Username and password do not match");
  });
});

describe("Exercice2", () => {
  it.only("Scenario1", () => {
    cy.visit("https://practice.automationtesteracademy.com");
    cy.get('[data-test="logo-img"]').should("be.visible");
    cy.get('[data-test="username-login"]')
      .type("login_user")
      .should("have.value", "login_user");
    cy.get('[data-test="password-login"]')
      .type("cypress-geek")
      .should("have.value", "cypress-geek");
    cy.get('[data-test="submit-login"]').click();
    cy.get('[data-test="p-contact"]').should("contain", "Contactez nous!");
    cy.get(".grid-container img").should("have.length", 8);
  });
});
