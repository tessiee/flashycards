/// <reference types="cypress" />

import Base_PO from "./00.base_PO";

class NavBar_Left_PO extends Base_PO {
  elements = {
    language_1: () => cy.get("#language_1"),
    category_1: () => cy.get("#category_1_es"),
    category_1_set_1: () => cy.get("#set_1_1_es"),
    category_1_set_2: () => cy.get("#set_1_2_es"),
    category_2: () => cy.get("#category_2_es"),
    category_2_set_1: () => cy.get("#set_2_1_es"),
    category_2_set_2: () => cy.get("#set_2_2_es"),
    category_3: () => cy.get("#category_3_es"),
    category_3_set_1: () => cy.get("#set_3_1_es"),
  };

  shouldContain(text) {
    cy.get("#leftSidebar").should("contain", text);
  }

  verifyCategoryLanguage(categoryName, language) {
    let category_id;
    switch (categoryName) {
      case "Nouns":
        category_id = cy.get("#flashySetsCategory_1_es");
        break;
      case "Adjectives":
        category_id = cy.get("#flashySetsCategory_2_es");
        break;
      case "Verbs":
        category_id = cy.get("#flashySetsCategory_3_es");
        break;
    }
    category_id.should("have.class", language.toLowerCase());
  }

  setLanguage(language) {
    this.elements.language_1().click();
  }
  getLanguage(language) {}
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
    }
  }
  openSet(setName) {
    switch (setName) {
      case ('People'):
        cy.get('#set_1_1_es').click();
        break;
    }
  }
}

export default NavBar_Left_PO;
