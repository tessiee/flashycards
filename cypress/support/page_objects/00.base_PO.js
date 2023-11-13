/// <reference types='cypress' />

class Base_PO {
  navigate() {
    cy.visit("");
  }

  getPageTitle() {
    return cy.title();
  }

  pageShouldContain(condition, text) {
    if (condition === "not") {
      condition += ".";
    }
    cy.get("body").should(`${condition}contain`, text);
  }
}

export default Base_PO;
