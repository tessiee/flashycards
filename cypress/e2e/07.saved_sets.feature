@saved-sets @regression
Feature: Flashycards saved sets

    Background: Create a new saved set
        Given I navigate to the flashycards homepage
        When I click on 'Create Set'
        And I click on the button 'startCreatingButton'
        And I enter the value 'My first set' into the field 'set name'
        And I enter the value 'hello' into the field 'word'
        And I enter the value 'hola' into the field 'translation'
        And I click on the button 'createSetButton'

    @smoke
    Scenario: Saved set displays correct items
        When I open the saved set '1'
        Then The field 'word' should contain the value 'hello'
        And The field 'translation' should contain the value 'hola'