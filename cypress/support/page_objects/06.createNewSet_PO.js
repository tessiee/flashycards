/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class CreateNewSet_PO extends Base_PO {
  elements = {
    startCreatingButton: () => cy.get('[id="startCreating"]'),
    moreFieldsButton: () => cy.get('[id="moreFieldsButton"]'),
    previousFieldsButton: () => cy.get('[id="previousFieldsButton"]'),
    nextFieldsButton: () => cy.get('[id="nextFieldsButton"]'),
    createSetButton: () => cy.get('[id="createSetButton"]'),
  };

  shouldContain(text) {
    cy.get('[id="createNewSetContainer"]').should("contain", text)
  }
  shouldDisplay(button) {
    switch (button) {
      case "startCreatingButton":
        this.elements.startCreatingButton().should('be.visible');
        break;
      case "moreFieldsButton":
        this.elements.moreFieldsButton().should('be.visible');
        break;
      case "previousFieldsButton":
        this.elements.previousFieldsButton().should('be.visible');
        break;
      case "nextFieldsButton":
        this.elements.nextFieldsButton().should('be.visible');
        break;
      case "createSetButton":
        this.elements.createSetButton().should('be.visible');
        break;
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
}

export default CreateNewSet_PO;
