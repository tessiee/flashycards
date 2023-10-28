/// <reference types='cypress' />

class Base_PO {
  navigate() {
      cy.visit('')
    }

  getPageTitle() {
    return cy.title();
  }

  pageShouldContain(text) {
    cy.get('body').should('contain', text);
  }
}

export default Base_PO;
  