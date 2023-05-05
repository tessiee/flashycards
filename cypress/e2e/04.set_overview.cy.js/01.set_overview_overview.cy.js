/// <reference types="cypress" />

describe("Overview of the Set Overviews", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it("displays all the expected items in the set overview", () => {
    cy.openCategory("es", 1, 2);
    cy.get("#setOverview h3").should("have.text", "Set overview");
    cy.get("#duoContainer_1").should("not.have.class", "invisible");
    cy.get("#duoContainer_1")
      .find(".duo")
      .should("have.length", 6)
      .and("not.have.class", "invisible");
    cy.get(".duo")
      .find(".setWord")
      .should("have.length", 6)
      .and("not.have.class", "invisible");
    cy.get(".duo")
      .find(".setTranslation")
      .should("have.length", 6)
      .and("not.have.class", "invisible");
    cy.get("#previousWordsButton").should("have.class", "invisible");
    cy.get("#nextWordsButton").should("have.class", "invisible");
    cy.get("#startPractice").should("not.have.class", "invisible");
  });

  it("only the first two duo containers are displayed", () => {
    cy.openCategory("es", 1, 1);
    cy.get("#duoContainer_1").should("not.have.class", "invisible");
    cy.get("#duoContainer_2").should("not.have.class", "invisible");
    cy.get("#duoContainer_3")
      .should("not.be.visible")
      .and("have.class", "invisible");
  });

  it('displays the "next" button if more words are available', () => {
    cy.openCategory("es", 1, 1);
    cy.get("#duoContainer_3")
      .should("not.be.visible")
      .and("have.class", "invisible");
    cy.get("#nextWordsButton")
      .should("be.visible")
      .and("not.have.class", "invisible");
  });

});
