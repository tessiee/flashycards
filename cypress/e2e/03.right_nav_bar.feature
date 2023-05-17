@right-nav-bar @not-ready
Feature: Right Navigation Bar Overview

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Right navigation bar displays correct items
        Then The right navigation bar should contain 'Create a New Set'
        And The right navigation bar should contain 'My Set 1'
        And The right navigation bar should contain 'My Set 2'