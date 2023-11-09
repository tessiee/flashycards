/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class SavedSets_PO extends Base_PO {
  elements = {
    setWord: (position) =>
      cy
        .get("#setOverviewContainer")
        .find("#duoContainer_1>.duo")
        .eq(position - 1)
        .find(".setWord"),
    setTranslation: (position) =>
      cy
        .get("#setOverviewContainer")
        .find("#duoContainer_1>.duo")
        .eq(position - 1)
        .find(".setTranslation"),
    startPracticeButton: () =>
      cy.get("#setOverviewContainer").find("#startPractice"),
    nextButton: () => cy.get("#setOverviewContainer").find("#nextDuosButton"),
    previousButton: () =>
      cy.get("#setOverviewContainer").find("#previousDuosButton"),
    editButton: () =>
      cy.get("#setOverviewContainer").find("#editSavedSetButton"),
  };

  verifyValue(field, position, value) {
    switch (field) {
      case "Word":
        this.elements.setWord(position).should("have.text", value);
        break;
      case "Translation":
        this.elements.setTranslation(position).should("have.text", value);
        break;
      default:
        cy.log("Unknown field");
    }
  }

  showNextDuos() {
    this.elements.nextButton().click();
  }
  showPreviousDuos() {
    this.elements.previousButton().click();
  }
  startPractice() {
    this.elements.startPracticeButton().click();
  }
  editSet() {
    this.elements.editButton().click();
  }
}

export default SavedSets_PO;
