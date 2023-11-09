/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Flashcard_Practice_PO from "../page_objects/05.flashcard_practice_PO";

const flashCardPractice = new Flashcard_Practice_PO();

When(/^I click on the '(.*)' button/, (buttonName) => {
  switch (buttonName) {
    case "Hint":
      flashCardPractice.showHint();
      break;
    case "Reveal":
      flashCardPractice.revealWord();
      break;
    case "Next Word":
      flashCardPractice.nextWord();
      break;
    case "Restart Practice":
      flashCardPractice.restartPractice();
      break;
    default:
      cy.log("Unknown button");
  }
});

Then(/^The widget 'Flashcard' should display the text '(.*)'/, (text) => {
  flashCardPractice.shouldDisplay(text);
});

Then(/^The widget 'Flashcard' should not display the text '(.*)'/, (text) => {
  flashCardPractice.shouldNotDisplay(text);
});

Then(/^The widget 'Flashcard' should contain the button '(.*)'/, (button) => {
  flashCardPractice.shouldContain(button);
});

Then(/^The button '(.*)' should be interactable/, (button) => {
  flashCardPractice.shouldBeEnabled(button);
});
