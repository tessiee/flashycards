/// <reference types='cypress' />

import Base_PO from "./00.base_PO";

class NavBar_Left_PO extends Base_PO {
  elements = {
    left_NavBar: () => cy.get("#leftSidebar"),
    language_1: () => cy.get("#leftSidebar").find("#language_1"),
    category_1: () => cy.get("#leftSidebar").find("#category_1_es"),
    category_1_set_1: () => cy.get("#leftSidebar").find("#set_1_1_es"),
    category_1_set_2: () => cy.get("#leftSidebar").find("#set_1_2_es"),
    category_2: () => cy.get("#leftSidebar").find("#category_2_es"),
    category_2_set_1: () => cy.get("#leftSidebar").find("#set_2_1_es"),
    category_2_set_2: () => cy.get("#leftSidebar").find("#set_2_2_es"),
    category_3: () => cy.get("#leftSidebar").find("#category_3_es"),
    category_3_set_1: () => cy.get("#leftSidebar").find("#set_3_1_es"),
  };

  shouldContain(condition, text) {
    if (condition === "not") {
      condition += ".";
    }
    this.elements.left_NavBar().should(`${condition}contain`, text);
  }

  verifyCategoryLanguage(categoryName, language) {
    let category;
    switch (categoryName) {
      case "Nouns":
        category = this.elements.category_1();
        break;
      case "Adjectives":
        category = this.elements.category_2();
        break;
      case "Verbs":
        category = this.elements.category_3();
        break;
      default:
        cy.log("Unknown category");
    }
    category.parent().should("have.class", language.toLowerCase());
  }

  setLanguage() {
    this.elements.language_1().click();
  }

  getLanguage(language) {
    switch (language) {
      case "Spanish":
        this.elements.language_1().should("have.class", "active");
        break;
      default:
        cy.log("Unknown language");
    }
  }

  setCategory(categoryName) {
    switch (categoryName) {
      case "Nouns":
        this.elements.category_1().click();
        break;
      case "Adjectives":
        this.elements.category_2().click();
        break;
      case "Verbs":
        this.elements.category_3().click();
        break;
      default:
        cy.log("Unknown category");
    }
  }

  openSet(setName) {
    switch (setName) {
      case "People":
        this.elements.category_1_set_1().click();
        break;
      case "Animals":
        this.elements.category_1_set_2().click();
        break;
      case "Sizes":
        this.elements.category_2_set_1().click();
        break;
      case "Colours":
        this.elements.category_2_set_2().click();
        break;
      case "Frequent":
        this.elements.category_3_set_1().click();
        break;
      default:
        cy.log("Unknown set");
    }
  }
}

export default NavBar_Left_PO;
