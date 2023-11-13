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

  shouldContain(condition, text) {
    if (condition === "not") {
      condition += ".";
    }
    this.elements.setOverview().should(`${condition}to.have`, text);
  }

  shouldHaveButton(condition, button) {
    if (condition === "not") {
      condition += ".";
    }
    switch (button) {
      case "Next":
        cy.get(this.elements.nextButton()).should(`${condition}be.visible`);
        break;
      case "Previous":
        cy.get(this.elements.previousButton()).should(`${condition}be.visible`);
        break;
      case "Start Practice":
        cy.get(this.elements.startPracticeButton()).should(
          `${condition}be.visible`
        );
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
