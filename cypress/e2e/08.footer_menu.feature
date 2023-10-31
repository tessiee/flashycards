@footer-menu @regression
Feature: Footer Menu

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Footer menu displays correct items
        Then The footer menu should contain 'About Flashycards'

    @smoke
    Scenario: Footer menu link opens correct widget
        When I select the category 'Nouns'
        And I open the set 'People'
        Then The widget 'setOverviewContainer' should be displayed in the center
        When I select the link 'aboutFlashy'
        Then The widget 'aboutFlashycards' should be displayed in the center