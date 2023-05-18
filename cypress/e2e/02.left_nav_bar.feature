@left-nav-bar @regression
Feature: Left Navigation Bar Overview

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Left navigation bar displays correct items
        Then The left navigation bar should contain 'Spanish'
        And The left navigation bar should contain 'Nouns'
        And The left navigation bar should contain 'Adjectives'
        And The left navigation bar should contain 'Verbs'


    Scenario: Left navigation bar displays the correct categories for the chosen language
        Then The set language should be 'Spanish'
        And The category 'Nouns' is for the language 'Spanish'
        And The category 'Adjectives' is for the language 'Spanish'
        And The category 'Verbs' is for the language 'Spanish'


    Scenario: Left navigation bar displays the correct sets for the chosen category - Nouns
        When I select the category 'Nouns'
        Then The left navigation bar should contain 'People'
        And The left navigation bar should contain 'Animals'


    Scenario: Left navigation bar displays the correct sets for the chosen category - Adjectives
        When I select the category 'Adjectives'
        Then The left navigation bar should contain 'Shapes'
        And The left navigation bar should contain 'Colours'


    Scenario: Left navigation bar displays the correct sets for the chosen category - Verbs
        When I select the category 'Verbs'
        Then The left navigation bar should contain 'Frequently used'

    @smoke
    Scenario: When I click on a set name, the widget 'Set Overview' should be opened