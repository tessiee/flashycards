/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class SavedSets_PO extends Base_PO {
    elements = {
        setWord: () => cy.get('.duo>div').eq(0),
        setTranslation: () => cy.get('.duo>div').eq(1),
      };

      checkInput(field, value) {
        switch (field) {
          case 'word':
          this.elements.setWord().should('have.text', value)
          break;
        case 'translation':
          this.elements.setTranslation().should('have.text', value)
          break;
          default:
            cy.log('Unknown field');
      }
      }

}

export default SavedSets_PO;