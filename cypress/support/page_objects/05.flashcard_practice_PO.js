/// <reference types='cypress' />

import Base_PO from "./00.base_PO";

class Flashcard_Practice_PO extends Base_PO {
  elements = {
    flashcard: () => cy.get("#flashcard"),
    word: () => cy.get("#flashcard").find("#word"),
    translation: () => cy.get("#flashcard").find("#translation"),
    hintButton: () => cy.get("#flashcard").find("#hintButton"),
    revealButton: () => cy.get("#flashcard").find("#revealButton"),
    nextWordButton: () => cy.get("#flashcard").find("#nextButton"),
    restartPracticeButton: () => cy.get("#flashcard").find("#restartButton"),
  };

  shouldDisplay(condition, text) {
    if (condition === "not") {
      condition += ".";
    }
    this.elements.flashcard().should(`${condition}contain`, text);
  }

  shouldContain(button) {
    switch (button) {
      case "Hint":
        this.elements.hintButton().should("be.visible");
        break;
      case "Reveal":
        this.elements.revealButton().should("be.visible");
        break;
      case "Next Word":
        this.elements.nextWordButton().should("be.visible");
        break;
      case "Restart Practice":
        this.elements.restartPracticeButton().should("be.visible");
        break;
      default:
        cy.log("Unknown button");
    }
  }

  shouldBeEnabled(button) {
    switch (button) {
      case "Hint":
        this.elements.hintButton().should("be.enabled");
        break;
      case "Reveal":
        this.elements.revealButton().should("be.enabled");
        break;
      case "Next Word":
        this.elements.nextWordButton().should("be.enabled");
        break;
      case "Restart Practice":
        this.elements.restartPracticeButton().should("be.enabled");
        break;
      default:
        cy.log("Unknown button");
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
