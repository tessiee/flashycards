@flashcards @flashcards-practice @regression
Feature: Flashycards flashcards practice

    Background: Navigate to the Flashycards application - Practice Overview widget
        Given I navigate to the flashycards homepage
        When I select the category 'Adjectives'
        And I open the set 'Sizes'
        And I click on the button - 'Start Practice'

    @smoke
    Scenario: The widget Flashcards - practice is correctly displayed
        Then The widget 'Flashcard' should be displayed in the center
        And The widget 'Flashcard' should display the text 'Big'
        And The widget 'Flashcard' should contain the button 'Hint'
        And The widget 'Flashcard' should contain the button 'Reveal'

    Scenario: The button 'Hint' functions correctly
        When I click on the 'Hint' button
        Then The widget 'Flashcard' should display the text 'G'
        Then The widget 'Flashcard' should not display the text 'Grande'

    Scenario: The button 'Reveal' functions correctly
        When I click on the 'Reveal' button
        Then The widget 'Flashcard' should display the text 'Grande'
        And The widget 'Flashcard' should contain the button 'Next Word'

    Scenario: The button 'Next Word' functions correctly
        When I click on the 'Reveal' button
        And I click on the 'Next Word' button
        Then The widget 'Flashcard' should display the text 'Small'
        And The widget 'Flashcard' should not display the text 'Pequeño/a'
        And The widget 'Flashcard' should not display the text 'Big'
        And The widget 'Flashcard' should not display the text 'Grande'
        And The widget 'Flashcard' should contain the button 'Hint'
        And The widget 'Flashcard' should contain the button 'Reveal'

    Scenario: The button 'Restart Practice' functions correctly
        When I click on the 'Reveal' button
        And I click on the 'Next Word' button
        And I click on the 'Reveal' button
        Then The widget 'Flashcard' should contain the button 'Restart Practice'
        When I click on the 'Restart Practice' button
        Then The widget 'Flashcard' should display the text 'Big'
        And The widget 'Flashcard' should contain the button 'Hint'
        And The widget 'Flashcard' should contain the button 'Reveal'

