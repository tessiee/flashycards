/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class FooterMenu_PO extends Base_PO {
  elements = {
    firstLink: () => cy.get('[id="footerFirst"]'),
  };

  shouldContain() {
    cy.get("#footerMenu").should("contain", text);
  }
  aboutFlashy() {
    this.elements.firstLink().click();
  }
}

export default FooterMenu_PO;