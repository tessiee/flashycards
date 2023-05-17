/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FooterMenu_PO from "../page_objects/08.footerMenu_PO";

const footerMenu = new FooterMenu_PO();

When(/^I select the link '(.*)'/, (linkName) => {
  if (linkName == "aboutFlashy") {
    footerMenu.aboutFlashy();
  }
});

Then(/^The footer menu should contain '(.*)'/, (item) => {
  footerMenu.shouldContain(item);
});