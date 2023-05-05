/// <reference types="cypress" />

describe('Overview of the footer menu', () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5501/");
    });
  
    it('displays all the expected links in the footer menu', () => {
      cy.get("footer").find("#footerMenuLinks li").first().should("contain", "About Flashycards");
      cy.get("footer").find("#footerMenuLinks li").last().should("contain", "About Flashycards");
    });

  });