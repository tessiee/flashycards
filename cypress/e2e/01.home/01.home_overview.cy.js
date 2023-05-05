/// <reference types="cypress" />

describe("homepage of Flashycards", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it('displays the header', () => {
    cy.get("header").should("be.visible");
    cy.get("header h1").first().should("have.text", "Flashycards");
    cy.get("header p").first().should("have.text", "A new language in a flash");
  });

  it('displays "About Flashycards" by default', () => {
    cy.get("#contentContainer").should("contain", "Pick a set to begin!");
    cy.get("#contentContainer").should("contain", "1. Pick a set");
    cy.get("#contentContainer").should("contain", "2. Go through the words");
    cy.get("#contentContainer").should(
      "contain",
      "3. Practice with flashcards"
    );
  });

  it('displays the left nav bar', () => {
    cy.get("#leftSidebar").should("be.visible");
  });

  it('displays the right nav bar', () => {
    cy.get("#rightSidebar").should("be.visible");
  });

  it('displays the footer menu', () => {
    cy.get("#footerMenu").should("be.visible");
    cy.get("#footerMenuLinks li").first().should("contain", "About Flashycards");
  });

});
