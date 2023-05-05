/// <reference types="cypress" />

describe("homepage of Flashycards", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5501/");
    });
  
    it('displays the link "Create a New Set" in the right nav bar', () => {
      cy.get("#rightSidebar").get("#createNewSet").get("#createNewSet").should("be.visible");
      cy.get("#createNewSet").should("have.text", "Create a New Set");
    });

    it('displays the Saved Sets in the right nav bar', () => {
      cy.get("#rightSidebar").get("#savedSetsContainer").should("contain", "Saved Sets");
      cy.get("#savedSetsContainer li").first().should("have.text", "My Set 1");
      cy.get("#savedSetsContainer li").last().should("have.text", "My Set 2");
    });
  
  });