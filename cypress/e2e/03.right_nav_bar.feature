@right-nav-bar @regression
Feature: Flashycards right navigation bar

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: The right navigation bar displays correct items
        Then The right navigation bar should contain 'Create a New Set'
        And There should be '0' saved sets

    @smoke
    Scenario: When clicking the link 'create set', the widget 'Create Set Overview' should be displayed
        When I click on 'Create Set'
        Then The widget 'Create Set - Start' should be displayed in the center