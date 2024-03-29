@footer-menu @regression
Feature: Flashycards footer menu

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Footer menu displays correct items
        Then The footer menu should contain 'About Flashycards'

    Scenario: Footer menu link opens correct widget
        When I select the category 'Nouns'
        And I open the set 'People'
        Then The widget 'About Flashycards' should not be displayed in the center
        When I select the link 'aboutFlashy'
        Then The widget 'About Flashycards' should be displayed in the center