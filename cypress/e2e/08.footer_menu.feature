@footer-menu @not-ready
Feature: Footer Menu

    Background: Navigate to the Flashycards application
        Given I navigate to the flashycards homepage

    @smoke
    Scenario: Footer menu displays correct items
        Then The footer menu should contain 'About Flashycards'

    @smoke
    Scenario: Footer menu is displayed by default when opening the app
        Then The window 'aboutFlashycards' should be displayed in the center

    @smoke
    Scenario: Footer menu link opens correct widget
        When I select the category 'Nouns'
        When I open the set 'People'
        Then The window 'setOverviewContainer' should be displayed in the center
        When I select the link 'aboutFlashy'
        Then The window 'aboutFlashycards' should be displayed in the center