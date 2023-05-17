/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateNewSet_PO from "../page_objects/06.createNewSet_PO";

const createNewSet = new CreateNewSet_PO();

When(/^I click on the button '(.*)'/, (buttonName) => {
  if (buttonName == "moreFields") {
    createNewSet.showMoreFields();
  } else if (buttonName == "saveSet") {
    createNewSet.saveSet();
  }
});

Then(/^The create new set overview should contain '(.*)'/, (item) => {
  createNewSet.shouldContain(item);
});