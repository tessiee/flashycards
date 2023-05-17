/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class Homepage_PO extends Base_PO {
  navigateToHomepage() {
    super.navigate();
  }

  shouldDisplayWidget(item) {
    cy.get().find(item);
  }
}

export default Homepage_PO;
