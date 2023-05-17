@flashcards @flashcards-practice @not-ready
Feature: Flashcards Practice

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Flashcards - Practice displays correct items
        Then The page should contain 'CONTACT US'