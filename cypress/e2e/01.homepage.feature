@homepage @regression
Feature: Flashycards homepage overview

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Homepage displays correct items
        Then The page title should be 'Flashycards'
        And The page should  contain the text 'Flashy Card Sets'
        And The page should  contain the text 'My Own Card Sets'
        And The page should  contain the text 'Pick a set to begin!'
        And The page should  contain the text 'About Flashycards'
