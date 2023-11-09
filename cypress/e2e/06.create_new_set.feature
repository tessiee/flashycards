@create-new-set @regression
Feature: Flashycards create new set feature

    Background: Navigate to the Flashycards application - create set widget
        Given I navigate to the flashycards homepage
        When I click on 'Create Set'

    @smoke
    Scenario: Create new set widget displays the correct items
        Then The widget 'Create Set - Start' should be displayed in the center
        And The create new set overview should display the button 'startCreatingButton'
        When I click on the button 'startCreatingButton'
        Then The widget 'Create Set - Form' should be displayed in the center
        And The create new set overview should display the button 'createSetButton'
        And The create new set overview should display the button 'moreFieldsButton'

    Scenario: Can create a new set
        And I click on the button 'startCreatingButton'
        When I enter the value 'My first set' into the field 'set name'
        And I enter the value 'hello' into the field 'word'
        And I enter the value 'hola' into the field 'translation'
        And I click on the button 'createSetButton'
        Then The right navigation bar should contain 'My first set'