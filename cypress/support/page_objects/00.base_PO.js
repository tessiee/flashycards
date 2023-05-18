/// <reference types="cypress" />

class Base_PO {
  navigate() {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }

  getPageTitle() {
    return cy.title();
  }

  pageShouldContain(text) {
    cy.get("body").should("contain", text);
  }
}

export default Base_PO;
  