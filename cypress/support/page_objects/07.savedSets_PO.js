/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class SavedSets_PO extends Base_PO {
    elements = {
        firstSet: () => cy.get('[name="first_name"]'),
        SecondSet: () => cy.get('[name="first_name"]')
      };

      shouldContain() {}
      showNextDuos(){}
      showPreviousDuos(){}
      editMode(){}
      readMode(){}
      startPractice(){}

}

export default SavedSets_PO;