/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/01.homepage_PO";

const homePage = new Homepage_PO();

Given(/^I navigate to the flashycards homepage/, () => {
  homePage.navigateToHomepage();
});

Then(/^The window '(.*)' should be displayed in the center/, (item) => {
  homePage.shouldContainWidget(item);
});