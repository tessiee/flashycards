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
    }
  }
}

export default Homepage_PO;
