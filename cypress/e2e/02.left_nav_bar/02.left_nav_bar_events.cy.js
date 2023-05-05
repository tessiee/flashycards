/// <reference types="cypress" />

describe("Events in left navigation bar of Flashycards", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5501/");
    });
    
    it('displays all the sets for the categorie "Nouns" when category is opened', () => {
      cy.get("#category_1_es").click().get("#set_1_1_es").should("be.visible");
      cy.get("#set_1_2_es").should("be.visible");
      cy.get("#set_1_1_es").should("not.have.class", "invisible");
      cy.get("#set_1_2_es").should("not.have.class", "invisible");
    });
  
    it('does not display the sets for the categorie "Nouns" when category is closed', () => {
      cy.get("#category_1_es").click().get("#set_1_1_es").should("be.visible");
      cy.get("#category_1_es").click().get("#set_1_1_es").should("not.be.visible");
      cy.get("#set_1_2_es").should("not.be.visible");
      cy.get("#set_1_1_es").should("have.class", "invisible");
      cy.get("#set_1_2_es").should("have.class", "invisible");
    });
  
    it('displays all the sets for the categorie "Adjectives" when category is opened', () => {
      cy.get("#category_2_es").click().get("#set_2_1_es").should("be.visible");
      cy.get("#set_2_2_es").should("be.visible");
      cy.get("#set_2_1_es").should("not.have.class", "invisible");
      cy.get("#set_2_2_es").should("not.have.class", "invisible");
    });
  
    it('does not display the sets for the categorie "Adjectives" when category is closed', () => {
      cy.get("#category_2_es").click().get("#set_2_1_es").should("be.visible");
      cy.get("#category_2_es").click().get("#set_2_1_es").should("not.be.visible");
      cy.get("#set_2_2_es").should("not.be.visible");
      cy.get("#set_2_1_es").should("have.class", "invisible");
      cy.get("#set_2_2_es").should("have.class", "invisible");
    });
    
    it('displays all the sets for the categorie "Verbs" when category is opened', () => {
      cy.get("#category_3_es").click().get("#set_3_1_es").should("be.visible");
      cy.get("#set_3_1_es").should("not.have.class", "invisible");
    });
  
    it('does not display the sets for the categorie "Verbs" when category is closed', () => {
      cy.get("#category_3_es").click().get("#set_3_1_es").should("be.visible");
      cy.get("#category_3_es").click().get("#set_3_1_es").should("not.be.visible");
      cy.get("#set_3_1_es").should("have.class", "invisible");
    });
    
  });