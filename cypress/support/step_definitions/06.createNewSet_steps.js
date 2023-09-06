/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateNewSet_PO from "../page_objects/06.createNewSet_PO";

const createNewSet = new CreateNewSet_PO();

When(/^I click on the button '(.*)'/, (buttonName) => {
  if (buttonName == "startCreatingButton") {
    createNewSet.startCreatingNewSet();
  } else if (buttonName == "moreFieldsButton") {
    createNewSet.showMoreFields();
  } else if (buttonName == "previousFieldsButton") {
    createNewSet.showPreviousFields();
  } else if (buttonName == "nextFieldsButton") {
    createNewSet.showNextFields();
  } else if (buttonName == "createSetButton") {
    createNewSet.createSet();
  }
});

Then(/^The create new set overview should contain the text '(.*)'/, (text) => {
  createNewSet.shouldContain(text);
});

Then(/^The create new set overview should display the button '(.*)'/, (button) => {
  createNewSet.shouldDisplay(button);
});