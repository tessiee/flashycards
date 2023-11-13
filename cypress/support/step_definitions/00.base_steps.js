/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/00.base_PO";

const basePage = new Base_PO();

beforeEach(() => {
  cy.clearLocalStorage;
  cy.viewport(1728, 891);
});

When(/^I wait for '(.*)' seconds/, (amount) => {
  cy.wait(amount * 1000);
});

Then(/^The page should (.*)contain the text '(.*)'/, (condition, text) => {
  basePage.pageShouldContain(condition, text);
});

Then(/^The page title should be '(.*)'/, (title) => {
  basePage.getPageTitle().should("contain", title);
});
