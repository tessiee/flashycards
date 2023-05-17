/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Flashcard_Practice_PO from "../page_objects/05.flashcard_practice_PO";

const flashCardPractice = new Flashcard_Practice_PO();

When(/^I click on the '(.*)' button/, (buttonName) => {
  if (buttonName == "hint") {
    flashCardPractice.showHint();
  } else if (buttonName == "revealWord") {
    flashCardPractice.revealWord();
  } else if (buttonName == "nextWord") {
    flashCardPractice.nextWord();
  } else if (buttonName == "restartPractice") {
    flashCardPractice.restartPractice();
  }
});

Then(/^The flashcard should contain '(.*)'/, (text) => {
  flashCardPractice.shouldContain(text);
});