/// <reference types='cypress' />

import Base_PO from "./00.base_PO";

class CreateNewSet_PO extends Base_PO {
  elements = {
    newSetContainer: () => cy.get("#createNewSetContainer"),
    startCreatingButton: () =>
      cy.get("#createNewSetContainer").find("#startCreating"),
    moreFieldsButton: () =>
      cy.get("#createNewSetContainer").find("#moreFieldsButton"),
    previousFieldsButton: () =>
      cy.get("#createNewSetContainer").find("#previousFieldsButton"),
    nextFieldsButton: () =>
      cy.get("#createNewSetContainer").find("#nextFieldsButton"),
    createSetButton: () =>
      cy.get("#createNewSetContainer").find("#createSetButton"),
    editSetButton: () =>
      cy.get("#createNewSetContainer").find("#editSetButton"),
    wordField: (position) =>
      cy.get("#createNewSetContainer").find(`#newDuo_${position}>input`).eq(0),
    translationField: (position) =>
      cy.get("#createNewSetContainer").find(`#newDuo_${position}>input`).eq(1),
    setNameField: () => cy.get("#createNewSetContainer").find("#newSetName"),
    invalidError: () => cy.get("#invalidDuosError"),
  };

  shouldContain(text) {
    this.elements.newSetContainer().should("contain", text);
  }

  shouldDisplay(button) {
    switch (button) {
      case "startCreatingButton":
        this.elements.startCreatingButton().should("be.visible");
        break;
      case "moreFieldsButton":
        this.elements.moreFieldsButton().should("be.visible");
        break;
      case "previousFieldsButton":
        this.elements.previousFieldsButton().should("be.visible");
        break;
      case "nextFieldsButton":
        this.elements.nextFieldsButton().should("be.visible");
        break;
      case "createSetButton":
        this.elements.createSetButton().should("be.visible");
        break;
      default:
        cy.log("Unknown button");
    }
  }

  startCreatingNewSet() {
    this.elements.startCreatingButton().click();
  }

  showMoreFields() {
    this.elements.moreFieldsButton().click();
  }

  showPreviousFields() {
    this.elements.previousFieldsButton().click();
  }

  showNextFields() {
    this.elements.nextFieldsButton().click();
  }

  createSet() {
    this.elements.createSetButton().click();
  }

  editSet() {
    this.elements.editSetButton().click();
  }

  enterValue(value, field, position) {
    if (!value == "") {
      switch (field) {
        case "Word":
          this.elements.wordField(position).type(value);
          break;
        case "Translation":
          this.elements.translationField(position).type(value);
          break;
        default:
          cy.log("Unknown field");
      }
    }
  }

  setName(value) {
    this.elements.setNameField().type(value);
  }

  displayError(field, text) {
    switch (field) {
      case "Set Name":
        cy.get("#newSetForm")
          .find("#setNameError")
          .should("exist")
          .and("contain", text);
        break;
      default:
        cy.log("Unknown field");
    }
  }

  displayNotification() {
    this.elements.invalidError().should("be.visible");
  }

  acceptNotification() {
    this.elements.invalidError().find("#acceptInvalidError").click();
  }

  declineNotification() {
    this.elements.invalidError().find("#declineInvalidError").click();
  }
}

export default CreateNewSet_PO;
