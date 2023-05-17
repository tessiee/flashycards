@homepage @regression
Feature: Homepage Overview

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Homepage displays correct items
        Then The page title should be 'Flashycards'
        And The page should contain 'Flashy Card Sets'
        And The page should contain 'My Own Card Sets'
        And The page should contain 'Pick a set to begin!'