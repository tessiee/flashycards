/// <reference types="cypress" />

describe('Overview of left navigation bar of Flashycards', () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5501/");
    });
  
    it('displays the language "Spanish" in the left nav bar', () => {
      cy.get("#leftSidebar").should("contain", "Languages");
      cy.get("#languageOptions li").first().should("have.text", "Spanish");
    });
  
    it("displays all the categories in the left nav bar", () => {
      cy.get("#leftSidebar").should("contain", "Categories");
      cy.get("#category_1_es").should("have.text", "Nouns");
      cy.get("#category_2_es").should("have.text", "Adjectives");
      cy.get("#category_3_es").should("have.text", "Verbs");
    });
  
    it('only shows categories for the language "Spanish"', () => {
      cy.get("#category_1_es").parents("div").should("have.class", "spanish");
      cy.get("#category_2_es").parents("div").should("have.class", "spanish");
      cy.get("#category_3_es").parents("div").should("have.class", "spanish");
    });
    
  });