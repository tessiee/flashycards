/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class Flashcard_Practice_PO extends Base_PO {
  elements = {
    word: () => cy.get('[id="word"]'),
    translation: () => cy.get('[id="translation"]'),
    hintButton: () => cy.get('[id="hintButton"]'),
    revealButton: () => cy.get('[id="revealButton"]'),
    nextWordButton: () => cy.get('[id="nextButton"]'),
    restartPracticeButton: () => cy.get('[id="restartButton"]')
  };

  shouldDisplay(text) {
    cy.get('[id="flashcard"]').should("contain", text)
  }
  
  shouldContain(button) {
    switch (button) {
      case "hintButton":
        this.elements.hintButton().should('be.visible');
        break;
      case "revealButton":
        this.elements.revealButton().should('be.visible');
        break;
      case "nextWordButton":
        this.elements.nextWordButton().should('be.visible');
        break;
      case "restartPracticeButton":
        this.elements.restartPracticeButton().should('be.visible');
        break;
    } 
  }

  showHint() {
    this.elements.hintButton().click();
  }
  revealWord() {
    this.elements.revealButton().click();
  }
  nextWord() {
    this.elements.nextWordButton().click();
  }
  restartPractice() {
    this.elements.restartPracticeButton().click();
  }

}

export default Flashcard_Practice_PO;