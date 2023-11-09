@left-nav-bar @regression
Feature: Flashycards left navigation bar

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: The left navigation bar displays the correct items
        Then The left navigation bar should contain 'Spanish'
        And The left navigation bar should contain 'Nouns'
        And The left navigation bar should contain 'Adjectives'
        And The left navigation bar should contain 'Verbs'


    Scenario: The default language is spanish
        Then The set language should be 'Spanish'
        And The category 'Nouns' is for the language 'Spanish'
        And The category 'Adjectives' is for the language 'Spanish'
        And The category 'Verbs' is for the language 'Spanish'


    Scenario Outline: The left navigation bar displays the correct sets per chosen category
        When I select the category '<category>'
        Then The left navigation bar should contain '<setname_1>'
        And The left navigation bar should contain '<setname_2>'

        Examples:
            | category | setname_1 | setname_2 |
            | Nouns | People  | Animals  |
            | Adjectives | Shapes  | Colours  |
            | Verbs | Frequently used  |   |

    @smoke
    Scenario: When opening a set, the widget 'Set Overview' should be displayed
        When I select the category 'Nouns'
        And I open the set 'People'
        Then The widget 'Set Overview' should be displayed in the center