/// <reference types="cypress" />

describe('Overview of the flashcard practice', () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it('displays all the expected items in the flashcard practice', () => {
    cy.openCategory("es", 2, 1);
    cy.get("#startPractice").click();
    cy.get("#flashcard").find("#word").should("be.visible");
    cy.get("#flashcard").find("#translation").should("not.be.visible");
    cy.get("#flashcard").find("#hintButton").should("be.visible");
    cy.get("#flashcard").find("#revealButton").should("be.visible");
    cy.get("#flashcard").find("#nextButton").should("not.be.visible");
  });

  it('displays the correct word', () => {
    cy.openCategory("es", 2, 1);
    cy.get("#duoContainer_1 .setWord")
      .first()
      .should("contain", "Rectangular");
    cy.get("#startPractice").click();
    cy.get("#flashcard #word").should("contain", "Rectangular");
  });
});
