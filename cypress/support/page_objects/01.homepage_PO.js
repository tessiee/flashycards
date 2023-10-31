/// <reference types='cypress' />

import Base_PO from './00.base_PO';

class Homepage_PO extends Base_PO {
  elements = {
    setOverviewContainer: () => cy.get('#setOverviewContainer'),
    aboutFlashycards: () => cy.get('#aboutFlashycards'),
    createNewSetStart: () => cy.get('#newSetStart'),
    createNewSetForm: () => cy.get('#newSetForm'),
    flashcard: () => cy.get('#flashcard'),
  };

  navigateToHomepage() {
    super.navigate();
  }

  shouldDisplayWidget(item) {
    switch (item) {
      case 'setOverviewContainer':
        this.elements.setOverviewContainer().should('be.visible');
        break;
      case 'aboutFlashycards':
        this.elements.aboutFlashycards().should('be.visible');
        break;
      case 'createNewSetStart':
        this.elements.createNewSetStart().should('be.visible');
        break;
      case 'createNewSetForm':
        this.elements.createNewSetForm().should('be.visible');
        break;
      case 'flashcard':
        this.elements.flashcard().should('be.visible');
        break;
        default:
          cy.log('Unknown widget');
    }
  }
}

export default Homepage_PO;
