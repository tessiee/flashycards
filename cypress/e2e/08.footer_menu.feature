@footer-menu @not-ready
Feature: Footer Menu

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Footer menu displays correct items
        Then The footer menu should contain 'About flashy'