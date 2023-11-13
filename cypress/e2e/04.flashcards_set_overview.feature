@flashcards @flashcards-set-overview @regression
Feature: Flashycards set overview

    Background: Navigate to the Flashycards application - Set Overview widget
        Given I navigate to the flashycards homepage
        When I select the category 'Nouns'
        And I open the set 'People'

    @smoke
    Scenario: Flashcards - Set Overview displays correct items
        Then The widget 'Set Overview' should  be displayed in the center
        And The widget 'Set Overview' should  contain the text 'Set overview'
        And The widget 'Set Overview' should  contain the text 'I'
        And The widget 'Set Overview' should  contain the text 'Yo'
        And The widget 'Set Overview' should  contain the text 'Friend'
        And The widget 'Set Overview' should  contain the text 'Amigo/a'
        And The widget 'Set Overview' should not contain the text 'Neighbor'
        And The widget 'Set Overview' should not contain the text 'Vecino/a'
        And The widget 'Set Overview' should  contain the button 'Next'
        And The widget 'Set Overview' should  contain the button 'Start Practice!'
        And The widget 'Set Overview' should not contain the button 'Previous'

    Scenario: After clicking the 'Next' button, the correct items should be displayed
        When I click on the button - 'Next'
        Then The widget 'Set Overview' should  contain the text 'Neighbor'
        And The widget 'Set Overview' should  contain the text 'Vecino/a'
        And The widget 'Set Overview' should not contain the text 'Friend'
        And The widget 'Set Overview' should not contain the text 'Amigo/a'
        And The widget 'Set Overview' should  contain the button 'Previous'
        And The widget 'Set Overview' should  contain the button 'Start Practice!'
        And The widget 'Set Overview' should not contain the button 'Next'

    Scenario: After clicking the 'Previous' button, the correct items should be displayed
        When I click on the button - 'Next'
        And I click on the button - 'Previous'
        Then The widget 'Set Overview' should  contain the text 'Friend'
        And The widget 'Set Overview' should  contain the text 'Amigo/a'
        And The widget 'Set Overview' should not contain the text 'Neighbor'
        And The widget 'Set Overview' should not contain the text 'Vecino/a'
        And The widget 'Set Overview' should  contain the button 'Next'
        And The widget 'Set Overview' should  contain the button 'Start Practice!'
        And The widget 'Set Overview' should not contain the button 'Previous'

    @smoke
    Scenario: After clicking the 'Start Practice' button, the flashcard practice should be opened to the first word
        When I click on the button - 'Start Practice'
        Then The widget 'Flashcard' should  be displayed in the center
        And The widget 'Flashcard' should  display the text 'I'