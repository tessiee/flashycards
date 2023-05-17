@saved-sets @not-ready
Feature: Saved Sets

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Saved sets displays correct items
        Then The page should contain 'CONTACT US'