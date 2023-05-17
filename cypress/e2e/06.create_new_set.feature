@create-new-set @not-ready
Feature: Create New Set

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Create new set displays correct items
        Then The page should contain 'CONTACT US'