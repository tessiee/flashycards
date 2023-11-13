/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateNewSet_PO from "../page_objects/06.createNewSet_PO";

const createNewSet = new CreateNewSet_PO();

When(/^I click on the button '(.*)'/, (buttonName) => {
  switch (buttonName) {
    case "Start Creating":
      createNewSet.startCreatingNewSet();
      break;
    case "More Fields":
      createNewSet.showMoreFields();
      break;
    case "Previous Fields":
      createNewSet.showPreviousFields();
      break;
    case "Next Fields":
      createNewSet.showNextFields();
      break;
    case "Create Set":
      createNewSet.createSet();
      break;
    case "Edit Set":
      createNewSet.editSet();
      break;
    default:
      cy.log("Unknown button");
  }
});

Then(
  /^The widget 'Create New Set' should (.*) contain the text '(.*)'/,
  (condition, text) => {
    createNewSet.shouldContain(condition, text);
  }
);

Then(
  /^The create new set overview should (.*) display the button '(.*)'/,
  (condition, button) => {
    createNewSet.shouldDisplay(condition, button);
  }
);

Then(
  /^I enter the value '(.*)' into the field '(.*)' on position '(.*)'/,
  (value, field, position) => {
    createNewSet.enterValue(value, field, position);
  }
);

Then(/^I enter the value '(.*)' as the set name/, (value) => {
  createNewSet.setName(value);
});

Then(
  /^The field '(.*)' should (.*) display the error '(.*)'/,
  (field, condition, text) => {
    createNewSet.displayError(field, condition, text);
  }
);

Then(/^I should receive a notification regarding invalid data/, () => {
  createNewSet.displayNotification();
});

When(/^I click on the '(.*)' notification button/, (buttonName) => {
  switch (buttonName) {
    case "Create Set":
      createNewSet.acceptNotification();
      break;
    case "Cancel":
      createNewSet.declineNotification();
      break;
    default:
      cy.log("Unknown button");
  }
});
