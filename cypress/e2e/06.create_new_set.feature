@create-new-set @not-ready
Feature: Create New Set

    Background: Navigate to the Flashycards application - create set widget
        Given I navigate to the flashycards homepage
        And I click on 'Create Set'

    @smoke
    Scenario: Can start creating a new set
        Then The widget 'createNewSetStart' should be displayed in the center
        And The create new set overview should display the button 'startCreatingButton'
        When I click on the button 'startCreatingButton'
        Then The widget 'createNewSetForm' should be displayed in the center

    @smoke
    Scenario: The create new set form displays the correct items
        When I click on the button 'startCreatingButton'
        Then The create new set overview should display the button 'createSetButton'
        And The create new set overview should display the button 'moreFieldsButton'