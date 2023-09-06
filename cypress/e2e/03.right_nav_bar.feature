@right-nav-bar @not-ready
Feature: Right Navigation Bar Overview

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Right navigation bar displays correct items
        Then The right navigation bar should contain 'Create a New Set'

    @smoke
    Scenario: Verify that the Create Set link works
        When I click on 'Create Set'
        Then The window 'createOwnSet' should be displayed in the center