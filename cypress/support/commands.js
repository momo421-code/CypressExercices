// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]')
    .type(username)
    .should("have.value", username);
  cy.get('[data-test="password"]')
    .type(password)
    .should("have.value", password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("userForm", (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]')
    .type(firstName)
    .should("have.value", firstName);
  cy.get('[data-test="lastName"]')
    .type(lastName)
    .should("have.value", lastName);
  cy.get('[data-test="postalCode"]')
    .type(postalCode)
    .should("have.value", postalCode);

  cy.get('[data-test="continue"]').should("be.visible").click();
});
