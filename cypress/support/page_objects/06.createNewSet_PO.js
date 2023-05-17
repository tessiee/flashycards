/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class CreateNewSet_PO extends Base_PO {
  elements = {
    createSetButton: () => cy.get('[name="first_name"]'),
  };

  shouldContain() {}
  showMoreFields() {}
  saveSet() {}
}

export default CreateNewSet_PO;
