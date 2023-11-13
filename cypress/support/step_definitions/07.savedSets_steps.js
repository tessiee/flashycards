/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SavedSets_PO from "../page_objects/07.savedSets_PO";

const savedSets = new SavedSets_PO();

When(/^I click on button '(.*)'/, (button) => {
  switch (button) {
    case "Next":
      savedSets.showNextDuos();
      break;
    case "Previous":
      savedSets.showPreviousDuos();
      break;
    case "Start Practice":
      savedSets.startPractice();
      break;
    case "Edit Set":
      savedSets.editSet();
      break;
    default:
      cy.log("Unknown button");
  }
});

Then(
  /^The widget 'Saved Set' should (.*)contain the text '(.*)'/,
  (condition, text) => {
    savedSets.shouldContain(condition, text);
  }
);

Then(
  /^The field '(.*)' on position '(.*)' should (.*)contain the value '(.*)'/,
  (field, position, condition, value) => {
    savedSets.verifyValue(field, position, condition, value);
  }
);
