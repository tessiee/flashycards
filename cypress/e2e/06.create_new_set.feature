@create-new-set @regression
Feature: Flashycards create new set feature

    Background: Navigate to the Flashycards application - Create Set widget
        Given I navigate to the flashycards homepage
        When I click on 'Create Set'

    @smoke
    Scenario: Create new set widget displays the correct items
        Then The widget 'Create Set - Start' should  be displayed in the center
        And The create new set overview should  display the button 'Start Creating'
        When I click on the button 'Start Creating'
        Then The widget 'Create Set - Form' should  be displayed in the center
        And The create new set overview should  display the button 'Create Set'
        And The create new set overview should  display the button 'More Fields'

    Scenario: Can create a new set without errors
        And I click on the button 'Start Creating'
        And I enter the value 'My first set' as the set name
        And I enter the value 'Hello' into the field 'Word' on position '1'
        And I enter the value 'Hola' into the field 'Translation' on position '1'
        When I click on the button 'Create Set'
        Then The widget 'Navigation Bar - Right' should contain the item 'My first set'
        And There should be '1' saved sets

    Scenario: Verify that the field 'Set Name' is mandatory
        And I click on the button 'Start Creating'
        And I enter the value 'Hello' into the field 'Word' on position '1'
        And I enter the value 'Hola' into the field 'Translation' on position '1'
        When I click on the button 'Create Set'
        Then The field 'Set Name' should  display the error 'Please provide a set name'
        And There should be '0' saved sets

    Scenario: Verify that empty sets are not being saved
        And I click on the button 'Start Creating'
        And I enter the value 'Empty set' as the set name
        When I click on the button 'Create Set'
        Then The widget 'Navigation Bar - Right' should not contain the item 'Empty Set'

    Scenario Outline: Verify that saving a set containing incomplete or duplicate data, produces a notification
        And I click on the button 'Start Creating'
        And I enter the value '<setName>' as the set name
        And I enter the value '<firstWord>' into the field 'Word' on position '1'
        And I enter the value '<firstTranslation>' into the field 'Translation' on position '1'
        And I enter the value '<secondWord>' into the field 'Word' on position '2'
        And I enter the value '<secondTranslation>' into the field 'Translation' on position '2'
        When I click on the button 'Create Set'
        Then I should receive a notification regarding invalid data

            Examples:
            | setName | firstWord | firstTranslation | secondWord | secondTranslation |
            | Duplicate Duos | Hello | Hola | Hello | Hola |
            | Missing Word | Hello | Hola |  | Gracias |
            | Missing Translation | Hello | Hola | Thank you |  |

    Scenario: Verify that accepting the 'invalid set' notification, leads to the creation of the set
        And I click on the button 'Start Creating'
        And I enter the value 'Accept Notification' as the set name
        And I enter the value 'Hello' into the field 'Word' on position '1'
        And I enter the value '' into the field 'Translation' on position '1'
        And I enter the value 'Thank you' into the field 'Word' on position '2'
        And I enter the value 'Gracias' into the field 'Translation' on position '2'
        When I click on the button 'Create Set'
        And I click on the 'Create Set' notification button
        Then The widget 'Navigation Bar - Right' should contain the item 'Accept Notification'
        And The widget 'Create Set - Start' should  be displayed in the center
        And There should be '1' saved sets

    Scenario: Verify that declining the 'invalid set' notification, does not lead to the creation of the set
        And I click on the button 'Start Creating'
        And I enter the value 'Decline Notification' as the set name
        And I enter the value 'Hello' into the field 'Word' on position '1'
        And I enter the value '' into the field 'Translation' on position '1'
        When I click on the button 'Create Set'
        And I click on the 'Cancel' notification button
        Then The widget 'Navigation Bar - Right' should not contain the item 'Decline Notification'
        And The widget 'Create Set - Form' should  be displayed in the center
        And There should be '0' saved sets