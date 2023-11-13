@saved-sets @regression
Feature: Flashycards saved sets

    Background: Create and open a new saved set
        Given I navigate to the flashycards homepage
        When I click on 'Create Set'
        And I click on the button 'Start Creating'
        And I enter the value 'My first set' as the set name
        And I enter the value 'Hello' into the field 'Word' on position '1'
        And I enter the value 'Hola' into the field 'Translation' on position '1'
        And I click on the button 'Create Set'
        And I open the saved set on position '1'

    @smoke
    Scenario: The saved set displays correct items
        Then The field 'Word' on position '1' should  contain the value 'Hello'
        And The field 'Translation' on position '1' should  contain the value 'Hola'

    Scenario: The saved set can be edited
        When I click on button 'Edit Set'
        Then The widget 'Create Set - Form' should  be displayed in the center
        When I enter the value 'Thank you' into the field 'Word' on position '2'
        And I enter the value 'Gracias' into the field 'Translation' on position '2'
        And I click on the button 'Edit Set'
        Then The widget 'Create Set - Start' should  be displayed in the center
        When I open the saved set on position '1'
        Then The field 'Word' on position '1' should  contain the value 'Hello'
        And The field 'Translation' on position '1' should  contain the value 'Hola'
        And The field 'Word' on position '2' should  contain the value 'Thank you'
        And The field 'Translation' on position '2' should  contain the value 'Gracias'

    Scenario: The saved set can be opened as flashcard practice
        When I click on button 'Start Practice'
        Then The widget 'Flashcard' should  be displayed in the center
        And The widget 'Flashcard' should  display the text 'Hello'