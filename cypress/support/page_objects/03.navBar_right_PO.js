/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class NavBar_Right_PO extends Base_PO {
  elements = {
    first_link: () => cy.get('[name="first_name"]'),
    second_link: () => cy.get('[name="first_name"]'),
  };

  shouldContain(text) {
    cy.get("#rightSidebar").should("contain", text);
  }
  createSet() {}
  openSavedSet() {}
}

export default NavBar_Right_PO;
