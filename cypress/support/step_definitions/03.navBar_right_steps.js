/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavBar_Right_PO from "../page_objects/03.navBar_right_PO";

const navBar_right = new NavBar_Right_PO();

When(/^I click on 'Create Set'/, () => {
  navBar_right.createSet();
});

When(/^I open the saved set on position '(.*)'/, (index) => {
  navBar_right.openSavedSet(index);
});

Then(
  /^The widget 'Navigation Bar - Right' should contain the item '(.*)'/,
  (item) => {
    navBar_right.shouldContain(item);
  }
);

Then(
  /^The widget 'Navigation Bar - Right' should not contain the item '(.*)'/,
  (item) => {
    navBar_right.shouldNotContain(item);
  }
);

Then(/^There should be '(.*)' saved sets/, (amount) => {
  navBar_right.amountOf_SavedSets(amount);
});
