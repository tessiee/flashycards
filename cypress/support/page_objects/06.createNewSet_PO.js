/// <reference types='cypress' />

import Base_PO from './00.base_PO';

class CreateNewSet_PO extends Base_PO {
  elements = {
    newSetContainer: () => cy.get('#createNewSetContainer'),
    startCreatingButton: () => cy.get('#createNewSetContainer').find('#startCreating'),
    moreFieldsButton: () => cy.get('#createNewSetContainer').find('#moreFieldsButton'),
    previousFieldsButton: () => cy.get('#createNewSetContainer').find('#previousFieldsButton'),
    nextFieldsButton: () => cy.get('#createNewSetContainer').find('#nextFieldsButton'),
    createSetButton: () => cy.get('#createNewSetContainer').find('#createSetButton'),
    wordField: () => cy.get('#createNewSetContainer').find('#newDuo_1>input').eq(0),
    translationField: () => cy.get('#createNewSetContainer').find('#newDuo_1>input').eq(1),
    setNameField: () => cy.get('#createNewSetContainer').find('#newSetName'),
  };

  shouldContain(text) {
    this.elements.newSetContainer().should('contain', text);
  }
  shouldDisplay(button) {
    switch (button) {
      case 'startCreatingButton':
        this.elements.startCreatingButton().should('be.visible');
        break;
      case 'moreFieldsButton':
        this.elements.moreFieldsButton().should('be.visible');
        break;
      case 'previousFieldsButton':
        this.elements.previousFieldsButton().should('be.visible');
        break;
      case 'nextFieldsButton':
        this.elements.nextFieldsButton().should('be.visible');
        break;
      case 'createSetButton':
        this.elements.createSetButton().should('be.visible');
        break;
        default:
          cy.log('Unknown button');
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
  enterValue(value, field){
    switch (field) {
      case 'word':
      this.elements.wordField().click().type(value);
      break;
    case 'translation':
      this.elements.translationField().type(value);
      break;
    case 'set name':
      this.elements.setNameField().type(value);
      break;
      default:
        cy.log('Unknown field');
  }
}
}

export default CreateNewSet_PO;
