/// <reference types="cypress" />

describe("Formulaire inscription au club MMS", () => {
  it("inscription nominale", () => {
    cy.visit("index.html");
    // Méthode 1 : Selectionner par index
    cy.get("#position").select(0);
    cy.get("#position").select(1);
    cy.get("#position").select(2);
    cy.get("#position").select(3);
    //cy.screenshot();
    // Méthode 2 : Selectionner par texte
    cy.get("#position").select("Gardien");
    cy.get("#position").select("Milieu");
    cy.get("#position").select("Défenseur");
  });

  it.only("tests assesrtions cypress", function () {
    cy.viewport("macbook-13");

    cy.visit("index.html");
    // Verification d'un champs texte
    cy.get("#prenom").type("Nabil").should("have.value", "Nabil");
    cy.get('[data-test="submit"]').click();
    //cy.get("#erreurPrenom").should("not.be.visible");

    // Verification d'un texte
    cy.get("#accueil").should("have.text", "Accueil");

    cy.get("img").should("have.length", 4);

    // Recuperer les images dans la section activites
    // 1ere methode
    cy.get("#lesactivites img").should("have.length", 3);

    // 2eme methode
    cy.get("#lesactivites").find("img").should("have.length", 3);

    // 3eme methode
    cy.get("#lesactivites").children("img").should("have.len");

    // 4eme methode : whitin

    // Différence avec contains
    // cy.contains("toto");
    // cy.get("#accueil").contains("Accueil");
    // get et contains sont équivalents :
    // get recupere des elements HTML à travers selecteur CSS
    // contains recupere des elements HTML à travers du CONTENU TEXTE
  });
});

// Assertions Chainer "have.value" 'have.text'

// Commands Chaining cy.get("#prenom").type("Nabil").should..

// Case Sensitive == Sensible à la casse
// Ali # ALI # aLi # a L I
