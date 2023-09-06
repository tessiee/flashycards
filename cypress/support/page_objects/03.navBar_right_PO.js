/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class NavBar_Right_PO extends Base_PO {
  elements = {
    createSet_link: () => cy.get("#createNewSet"),
    savedSet_link_1: () => cy.get("#savedSet1")
  };

  shouldContain(item) {
    switch (item) {
      case "Create a New Set":
        cy.get("#rightSidebar").get(this.elements.createSet_link());
        break;
      case "My Set 1":
        cy.get("#rightSidebar").get(this.elements.savedSet_link_1());
        break;
    }
  }
  createSet() {
    this.elements.createSet_link().click();
  }
  openSavedSet() {
    this.elements.savedSet_link_1().click();
  }
}

export default NavBar_Right_PO;
