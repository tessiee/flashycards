/// <reference types='cypress' />

import Base_PO from "./00.base_PO";

class Homepage_PO extends Base_PO {
  elements = {
    setOverviewContainer: () => cy.get("#setOverviewContainer"),
    aboutFlashycards: () => cy.get("#aboutFlashycards"),
    createNewSetStart: () => cy.get("#newSetStart"),
    createNewSetForm: () => cy.get("#newSetForm"),
    flashcard: () => cy.get("#flashcard"),
  };

  navigateToHomepage() {
    super.navigate();
  }

  shouldDisplayWidget(item, condition) {
    if (condition === "not ") {
      condition = "not.";
    }
    switch (item) {
      case "Set Overview":
        this.elements.setOverviewContainer().should(`${condition}be.visible`);
        break;
      case "About Flashycards":
        this.elements.aboutFlashycards().should(`${condition}be.visible`);
        break;
      case "Create Set - Start":
        this.elements.createNewSetStart().should(`${condition}be.visible`);
        break;
      case "Create Set - Form":
        this.elements.createNewSetForm().should(`${condition}be.visible`);
        break;
      case "Flashcard":
        this.elements.flashcard().should(`${condition}be.visible`);
        break;
      default:
        cy.log("Unknown widget");
    }
  }
}

export default Homepage_PO;
