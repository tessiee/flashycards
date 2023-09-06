/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Flashcard_Practice_PO from "../page_objects/05.flashcard_practice_PO";

const flashCardPractice = new Flashcard_Practice_PO();

When(/^I click on the '(.*)' button/, (buttonName) => {
  if (buttonName == "hintButton") {
    flashCardPractice.showHint();
  } else if (buttonName == "revealButton") {
    flashCardPractice.revealWord();
  } else if (buttonName == "nextWordButton") {
    flashCardPractice.nextWord();
  } else if (buttonName == "restartPracticeButton") {
    flashCardPractice.restartPractice();
  }
});

Then(/^The flashcard should display the text '(.*)'/, (text) => {
  flashCardPractice.shouldDisplay(text);
});

Then(/^The flashcard should contain the button '(.*)'/, (button) => {
  flashCardPractice.shouldContain(button);
});