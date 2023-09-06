/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SavedSets_PO from "../page_objects/07.savedSets_PO";

const savedSets = new SavedSets_PO();

When(/^I click on button '(.*)'/, (buttonName) => {
  if (buttonName == "next") {
    savedSets.showNextDuos();
  } else if (buttonName == "previous") {
    savedSets.showPreviousDuos();
  } else if (buttonName == "edit") {
    savedSets.editMode();
  } else if (buttonName == "read") {
    savedSets.readMode();
  } else if (buttonName == "startPractice") {
    savedSets.startPractice();
  }
});

Then(/^The saved set overview should contain '(.*)'/, (item) => {
  savedSets.shouldContain(item);
});