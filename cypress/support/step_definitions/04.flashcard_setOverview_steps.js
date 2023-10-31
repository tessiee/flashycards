/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Flashcard_SetOverview_PO from "../page_objects/04.flashcard_setOverview_PO";

const flashcard_setOverview = new Flashcard_SetOverview_PO();

When(/^I navigate to the '(.*) set duo's/, (direction) => {
  if (direction === "next") {
    flashcard_setOverview.nextSet();
  } else if (direction === "previous") {
    flashcard_setOverview.previousSet();
  }
});

Then(/^The set overview should contain '(.*)'/, (text) => {
  flashcard_setOverview.shouldContain(text);
});

When(/^I start the flashcard practice/, () => {
  flashcard_setOverview.startPractice();
});