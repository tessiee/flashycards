/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavBar_Left_PO from "../page_objects/02.navBar_left_PO";

const navBar_left = new NavBar_Left_PO();

When(/^I select the language '(.*)'/, (language) => {
  navBar_left.setLanguage(language);
});

When(/^The selected language should be '(.*)'/, (language) => {
  navBar_left.getLanguage(language);
});

When(/^I select the category '(.*)'/, (categoryName) => {
  navBar_left.setCategory(categoryName);
});

When(/^I open the set '(.*)'/, (setName) => {
  navBar_left.openSet(setName);
});

Then(
  /^The widget 'Navigation Bar - Left' should (.*) contain the text '(.*)'/,
  (condition, item) => {
    navBar_left.shouldContain(condition, item);
  }
);

Then(
  /^The category '(.*)' is for the language '(.*)'/,
  (categoryName, language) => {
    navBar_left.verifyCategoryLanguage(categoryName, language);
  }
);
