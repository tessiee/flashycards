/// <reference types="cypress" />

describe("Events in the Set Overviews", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5501/");
    });
  
    it('displays all the expected items in the set overview', () => {
      cy.openCategory("es", 1, 2);
      cy.get("#setOverview h3").should("have.text", "Set overview");
      cy.get("#duoContainer_1").should("not.have.class", "invisible");
      cy.get("#duoContainer_1").should("have.a.property", ".duo");
      cy.get("#previousWordsButton").should("have.class", "invisible");
      cy.get("#nextWordsButton").should("have.class", "invisible");
      cy.get("#startPractice").should("not.have.class", "invisible");

    });
  
    it('displays the "next" button if more words are available', () => {
        cy.openCategory("es", 1, 1);
      cy.get("#nextWordsButton").should("not.have.class", "invisible");
    });

    it('does not display the next word containers if more words are available', () => {
        cy.openCategory("es", 1, 1);
        cy.get("#duoContainer_3").should("not.be.visible");
        cy.get("#duoContainer_3").should("have.class", "invisible");
    });
  
  });