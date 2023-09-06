@create-new-set @not-ready
Feature: Create New Set

    Background: Navigate to the Flashycards application - create set widget
        Given I navigate to the flashycards homepage
        When I click on 'Create Set'

    @smoke
    Scenario: Create new set first displays start window
        Then The window 'createNewSetStart' should be displayed in the center
        And The create new set overview should display the button 'startCreatingButton'

    @smoke
    Scenario: The start creating button functions
        When I click on the button 'startCreatingButton'
        Then The window 'createNewSetForm' should be displayed in the center

    @smoke
    Scenario: The create new set form displays the correct items
        When I click on the button 'startCreatingButton'
        Then The create new set overview should display the button 'createSetButton'
        And The create new set overview should display the button 'moreFieldsButton'