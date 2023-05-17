/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class FooterMenu_PO extends Base_PO {
  elements = {
    firstLink: () => cy.get('[name="first_name"]'),
  };

  shouldContain() {}
  aboutFlashy() {}
}

export default FooterMenu_PO;

/*

describe("Overview of the footer menu", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it("displays all the expected links in the footer menu", () => {
    cy.get("footer")
      .find("#footerMenuLinks li")
      .first()
      .should("contain", "About Flashycards");
    cy.get("footer")
      .find("#footerMenuLinks li")
      .last()
      .should("contain", "About Flashycards");
  });
});

describe("Events the footer menu", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it("displays the correct element after clicking the link in the footer menu", () => {
    cy.get("footer").find("#footerMenuLinks li").first().click();
    cy.get("#contentContainer").find("#aboutFlashycards").should("be.visible");
  });
});

*/