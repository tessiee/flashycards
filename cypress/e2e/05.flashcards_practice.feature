@flashcards @flashcards-practice @not-ready
Feature: Flashcards Practice

    Background: Navigate to the Flashycards application - Practice Overview widget
        Given I navigate to the flashycards homepage
        When I select the category 'Nouns'
        And I open the set 'People'
        And I start the flashcard practice

    @smoke
    Scenario: Flashcards - practice is correctly displayed
        Then The window 'flashcard' should be displayed in the center
        And The flashcard should display the text 'I'
        And The flashcard should contain the button 'hintButton'

    Scenario: Flascards - practice hint button functions correctly
        When I click on the 'hintButton' button
        Then The flashcard should display the text 'Y'

    Scenario: Flascards - practice reveal button functions correctly
        When I click on the 'revealButton' button
        Then The flashcard should display the text 'Yo'
        And The flashcard should contain the button 'nextWordButton'

