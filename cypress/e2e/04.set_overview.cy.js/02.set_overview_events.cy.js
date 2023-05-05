/// <reference types="cypress" />

describe('Events in the Set Overviews', () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it('displays the next duo containers after pressing the "next" button', () => {
    cy.openCategory("es", 3, 1);
    cy.get("#duoContainer_1")
      .should("be.visible")
      .and("not.have.class", "invisible");
    cy.get("#duoContainer_2")
      .should("be.visible")
      .and("not.have.class", "invisible");
    cy.get("#duoContainer_3")
      .should("not.be.visible")
      .and("have.class", "invisible");
    cy.get("#duoContainer_4")
      .should("not.be.visible")
      .and("have.class", "invisible");
    cy.get("#nextWordsButton").click();
    cy.get("#duoContainer_1")
      .should("not.be.visible")
      .and("have.class", "invisible");
    cy.get("#duoContainer_2")
      .should("not.be.visible")
      .and("have.class", "invisible");
    cy.get("#duoContainer_3")
      .should("be.visible")
      .and("not.have.class", "invisible");
    cy.get("#duoContainer_4")
      .should("be.visible")
      .and("not.have.class", "invisible");
  });

  it('the "next" button stays visible while more containers are available', () => {
    cy.openCategory("es", 3, 1);
    cy.get("#nextWordsButton").click();
    cy.get("#duoContainer_5").should("exist");
    cy.get("#nextWordsButton")
      .should("be.visible")
      .and("not.have.class", "invisible");
  });

  it('the "next" button becomes invisible when the last duo container is visible', () => {
    cy.openCategory("es", 3, 1);
    cy.get("#nextWordsButton").click();
    cy.get("#nextWordsButton").click();
    cy.get("#duoContainer_6").should("not.exist");
    cy.get("#nextWordsButton")
      .should("not.be.visible")
      .and("have.class", "invisible");
  });

  it('displays the "previous" button after clicking the "next" button', () => {
    cy.openCategory("es", 3, 1);
    cy.get("#nextWordsButton").click();
    cy.get("#previousWordsButton")
      .should("be.visible")
      .and("not.have.class", "invisible");
  });

  it('displays the flashcard practice overview after clicking the "start practice" button', () => {
    cy.openCategory("es", 3, 1);
    cy.get("#startPractice").click();
    cy.get("#flashcard")
      .should("be.visible")
    cy.get("#setOverview")
      .should("not.be.visible");
  });
});
