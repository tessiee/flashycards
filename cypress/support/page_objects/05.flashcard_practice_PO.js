/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class Flashcard_Practice_PO extends Base_PO {
  elements = {
    word: () => cy.get('[name="first_name"]'),
    translation: () => cy.get('[name="first_name"]'),
  };

  showHint() {}
  revealWord() {}
  nextWord() {}
  restartPractice() {}
  shouldContain() {}
}

export default Flashcard_Practice_PO;

/*

  it("displays all the expected items in the flashcard practice", () => {
    cy.openCategory("es", 2, 1);
    cy.get("#startPractice").click();
    cy.get("#flashcard").find("#word").should("be.visible");
    cy.get("#flashcard").find("#translation").should("not.be.visible");
    cy.get("#flashcard").find("#hintButton").should("be.visible");
    cy.get("#flashcard").find("#revealButton").should("be.visible");
    cy.get("#flashcard").find("#nextButton").should("not.be.visible");
  });

  it("displays the correct word", () => {
    cy.openCategory("es", 2, 1);
    cy.get("#duoContainer_1 .setWord").first().should("contain", "Rectangular");
    cy.get("#startPractice").click();
    cy.get("#flashcard #word").should("contain", "Rectangular");
  });

  it('displays the correct translation after clicking "reveal"', () => {
    cy.openCategory("es", 2, 1);
    cy.get("#duoContainer_1 .setWord").first().should("contain", "Rectangular");
    cy.get("#duoContainer_1 .setTranslation")
      .first()
      .should("contain", "Rectangular");
    cy.get("#startPractice").click();
    cy.get("#flashcard #word").should("contain", "Rectangular");
    cy.get("#revealButton").click();
    cy.get("#flashcard #translation").should("contain", "Rectangular");
  });

  it('displays the "next" button after clicking "reveal"', () => {
    cy.openCategory("es", 2, 1);
    cy.get("#startPractice").click();
    cy.get("#revealButton").click();
    cy.get("#flashcard").find("#nextButton").should("be.visible");
  });

  it('displays the next word after clicking the "next" button', () => {
    cy.openCategory("es", 2, 1);
    cy.get("#duoContainer_1 .setWord").last().should("contain", "Round");
    cy.get("#duoContainer_1 .setTranslation")
      .last()
      .should("contain", "Redondo/a");
    cy.get("#startPractice").click();
    cy.get("#revealButton").click();
    cy.get("#nextButton").click();
    cy.get("#flashcard #word").should("contain", "Round");
    cy.get("#revealButton").click();
    cy.get("#flashcard #translation").should("contain", "Redondo/a");
  });

  it('displays the "restart" button after revealing the last word', () => {
    cy.openCategory("es", 2, 1);
    cy.get("#duoContainer_1 .setWord").last().should("contain", "Round");
    cy.get("#duoContainer_1 .setTranslation")
      .last()
      .should("contain", "Redondo/a");
    cy.get("#startPractice").click();
    cy.get("#revealButton").click();
    cy.get("#nextButton").click();
    cy.get("#revealButton").click();
    cy.get("#flashcard #word").should("contain", "Round");
    cy.get("#flashcard #translation").should("contain", "Redondo/a");
    cy.get("#flashcard").find("#restartButton").should("be.visible");
  });

 it('displays the correct elements after clicking the "restart" button', () => {
    cy.openCategory("es", 2, 1);
    cy.get("#duoContainer_1 .setWord").first().should("contain", "Rectangular");
    cy.get("#duoContainer_1 .setTranslation")
      .first()
      .should("contain", "Rectangular");
    cy.get("#startPractice").click();
    cy.get("#revealButton").click();
    cy.get("#nextButton").click();
    cy.get("#revealButton").click();
    cy.get("#restartButton").click();
    cy.get("#flashcard #word").should("contain", "Rectangular");
    cy.get("#flashcard #translation").should("contain", "Rectangular");
    cy.get("#flashcard").find("#hintButton").should("be.visible");
    cy.get("#flashcard").find("#revealButton").should("be.visible");
    cy.get("#flashcard").find("#restartButton").should("not.be.visible");
  });
*/
