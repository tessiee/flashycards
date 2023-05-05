/// <reference types="cypress" />

describe('Events the footer menu', () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5501/");
    });
  
    it('displays the correct element after clicking the link in the footer menu', () => {
      cy.get("footer").find("#footerMenuLinks li").first().click();
      cy.get("#contentContainer").find("#aboutFlashycards").should("be.visible");
    });

  });