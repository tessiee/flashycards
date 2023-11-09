/// <reference types='cypress' />

import Base_PO from "./00.base_PO";

class Flashcard_SetOverview_PO extends Base_PO {
  elements = {
    setOverview: () => cy.get("#setOverviewContainer"),
    word: () => cy.get("#setOverviewContainer").find("#word"),
    translation: () => cy.get("#setOverviewContainer").find("#translation"),
    startPracticeButton: () =>
      cy.get("#setOverviewContainer").find("#startPractice"),
    nextButton: () => cy.get("#setOverviewContainer").find("#nextDuosButton"),
    previousButton: () =>
      cy.get("#setOverviewContainer").find("#previousDuosButton"),
  };

  shouldContain(text) {
    this.elements.setOverview().should("contain", text);
  }

  shouldNotContain(text) {
    this.elements.setOverview().should("not.have.text", text);
  }

  shouldHaveButton(button) {
    switch (button) {
      case "Next":
        cy.get(this.elements.nextButton());
        break;
      case "Previous":
        cy.get(this.elements.previousButton());
        break;
      case "Start Practice":
        cy.get(this.elements.startPracticeButton());
        break;
      default:
        cy.log("Unknown button");
    }
  }

  shouldNotHaveButton(button) {
    switch (button) {
      case "Next":
        cy.get(this.elements.nextButton()).should("not.be.visible");
        break;
      case "Previous":
        cy.get(this.elements.previousButton()).should("not.be.visible");
        break;
      case "Start Practice":
        cy.get(this.elements.startPracticeButton()).should("not.be.visible");
        break;
      default:
        cy.log("Unknown button");
    }
  }

  previousSet() {
    this.elements.previousButton().click();
  }

  nextSet() {
    this.elements.nextButton().click();
  }

  startPractice() {
    this.elements.startPracticeButton().click();
  }
}

export default Flashcard_SetOverview_PO;
