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


    Scenario Outline: Left navigation bar displays the correct sets for the chosen categories
        When I select the category '<category>'
        Then The left navigation bar should contain '<setname_1>'
        And The left navigation bar should contain '<setname_2>'

        Examples:
            | category | setname_1 | setname_2 |
            | Nouns | People  | Animals  |
            | Adjectives | Shapes  | Colours  |
            | Verbs | Frequently used  |   |

    @smoke
    Scenario: When I click on a set name, the widget 'Set Overview' should be opened