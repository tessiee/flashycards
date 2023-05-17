@flashcards @flashcards-set-overview @not-ready
Feature: Flashcards Set Overview

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Flashcards - Set Overview displays correct items
        Then The page should contain 'CONTACT US'