/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class Homepage_PO extends Base_PO {
  navigateToHomepage() {
    super.navigate();
  }

  shouldDisplayWidget(item) {
    switch (item) {
      case "setOverviewContainer":
        cy.get('#setOverviewContainer').should('be.visible');
        break;
        case "aboutFlashycards":
        cy.get('#aboutFlashycards').should('be.visible');
        break;
          case "createNewSetStart":
          cy.get('#newSetStart').should('be.visible');
          break;
          case "createNewSetForm":
          cy.get('#newSetForm').should('be.visible');
          break;
          case "flashcard":
          cy.get('#flashcard').should('be.visible');
          break;
    }
  }
}

export default Homepage_PO;
