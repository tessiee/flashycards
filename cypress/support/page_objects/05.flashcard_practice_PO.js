/// <reference types='cypress' />

import Base_PO from './00.base_PO';

class Flashcard_Practice_PO extends Base_PO {
  elements = {
    flashcard: () => cy.get('#flashcard'),
    word: () => cy.get('#word'),
    translation: () => cy.get('#translation'),
    hintButton: () => cy.get('#hintButton'),
    revealButton: () => cy.get('#revealButton'),
    nextWordButton: () => cy.get('#nextButton'),
    restartPracticeButton: () => cy.get('#restartButton')
  };

  shouldDisplay(text) {
    this.elements.flashcard().should('contain', text)
  }
  
  shouldContain(button) {
    switch (button) {
      case 'hintButton':
        this.elements.hintButton().should('be.visible');
        break;
      case 'revealButton':
        this.elements.revealButton().should('be.visible');
        break;
      case 'nextWordButton':
        this.elements.nextWordButton().should('be.visible');
        break;
      case 'restartPracticeButton':
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