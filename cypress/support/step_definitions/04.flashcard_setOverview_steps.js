/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Flashcard_SetOverview_PO from "../page_objects/04.flashcard_setOverview_PO";

const flashcard_setOverview = new Flashcard_SetOverview_PO();

Then(
  /^The widget 'Set Overview' should (.*) contain the text '(.*)'/,
  (condition, text) => {
    flashcard_setOverview.shouldContain(condition, text);
  }
);

Then(
  /^The widget 'Set Overview' should (.*) contain the button '(.*)'/,
  (button) => {
    flashcard_setOverview.shouldHaveButton(button);
  }
);

When(/^I click on the button - '(.*)'/, (button) => {
  switch (button) {
    case "Next":
      flashcard_setOverview.nextSet();
      break;
    case "Previous":
      flashcard_setOverview.previousSet();
      break;
    case "Start Practice":
      flashcard_setOverview.startPractice();
      break;
    default:
      cy.log("Unknown button");
  }
});
