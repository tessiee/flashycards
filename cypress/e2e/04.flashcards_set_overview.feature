@flashcards @flashcards-set-overview @not-ready
Feature: Flashcards Set Overview

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage
        When I select the category 'Nouns'
        And I open the set 'People'

    @smoke
    Scenario: Flashcards - Set Overview displays correct items
        Then The window 'setOverviewContainer' should be displayed in the center
        And The set overview should contain 'Set overview'
        And The set overview should contain 'Sister'
        And The set overview should contain 'Hermana'
        And The set overview should contain 'Next'
        And The set overview should contain 'Start Practice!'

    Scenario: When I click on the 'Next' button, the next word containers should appear

    Scenario: When I click on the 'Previous' button, the previous word containers should appear

    @smoke
    Scenario: When I click on the 'Start Practice' button, the flashcard practice should be opened to the first word