/// <reference types='cypress' />

import Base_PO from './00.base_PO';

class Flashcard_SetOverview_PO extends Base_PO {
  elements = {
    word: () => cy.get('#word'),
    translation: () => cy.get('#translation'),
    startPracticeButton: () => cy.get('#startPractice'),
  };

  previousSet() {}

  nextSet() {}

  shouldContain() {}

  startPractice() {
    this.elements.startPracticeButton().click();
  }
}

export default Flashcard_SetOverview_PO;

/*

describe("Overview of the Set Overviews", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it("displays all the expected items in the set overview", () => {
    cy.openCategory("es", 1, 2);
    cy.get("#setOverview").find("h3").should("have.text", "Set overview");
    cy.get("#setOverview")
      .find("#duoContainer_1")
      .should("not.have.class", "invisible");
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
    cy.get("#setOverviewContainer")
      .find("#nextWordsButton")
      .should("be.visible")
      .and("not.have.class", "invisible");
  });
});

describe("Events in the Set Overviews", () => {
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
    cy.get("#flashcard").should("be.visible");
    cy.get("#setOverview").should("not.be.visible");
  });
});

*/