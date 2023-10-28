/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class SavedSets_PO extends Base_PO {
    elements = {
        firstSet: () => cy.get('#savedSets').first('li'),
        SecondSet: () => cy.get('#savedSets').last('li')
      };

      shouldContain() {}
      showNextDuos(){}
      showPreviousDuos(){}
      editMode(){}
      readMode(){}
      startPractice(){}

}

export default SavedSets_PO;