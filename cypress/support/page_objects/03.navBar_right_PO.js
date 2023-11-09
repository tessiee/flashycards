/// <reference types='cypress' />

import Base_PO from "./00.base_PO";

let i = 1;

class NavBar_Right_PO extends Base_PO {
  elements = {
    navBar_right: () => cy.get("#rightSidebar"),
    createSet_link: () => cy.get("#rightSidebar").find("#createNewSet"),
    savedSets_container: () => cy.get("#savedSets"),
    savedSet_link: (i) => cy.get("#rightSidebar").find("#savedSets>li").eq(i),
  };

  shouldContain(item) {
    switch (item) {
      case "Create a New Set":
        cy.get(this.elements.createSet_link());
        break;
      case "My first set":
        cy.get(this.elements.savedSet_link(0));
        break;
      case "My second set":
        cy.get(this.elements.savedSet_link(1));
        break;
      case "My edited set":
        cy.get(this.elements.savedSet_link(0));
        break;
      case "Accept Notification":
        cy.get(this.elements.savedSet_link(0));
        break;
      default:
        cy.log("Unknown set");
    }
  }

  shouldNotContain(item) {
    switch (item) {
      case "Empty Set" || "Decline Notification":
        this.elements
          .navBar_right()
          .should("not.have.descendants", ".savedSet");
        break;
      default:
        cy.log("Unknown set");
    }
  }

  createSet() {
    this.elements.createSet_link().click();
  }

  openSavedSet(index) {
    i = index - 1;
    this.elements.savedSet_link(i).click();
  }

  amountOf_SavedSets(amount) {
    this.elements
      .savedSets_container()
      .children()
      .should("have.length", amount);
  }
}

export default NavBar_Right_PO;
