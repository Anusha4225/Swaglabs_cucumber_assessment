@LoginFeature
Feature: Login Feature

  Scenario Outline: Verify the login with correct username and password
    Given User has started the Swag Lab Application
    When User enters username "<UserName>"
    And User enters password "<Password>"
    And User clicks the Login Button
    Then User should be landed on the Products Page

    Examples: 
      | UserName     | Password     |
      | problem_user | secret_sauce |

  Scenario Outline: Verify the error message when we give incorrect username and password
    Given User has started the Swag Lab Application
    When User enters username "<UserName>"
    And User enters password "<Password>"
    And User clicks the Login Button
    Then User should be getting the "<Error>"

    Examples: 
      | UserName     | Password   | Error                                                                     |
      | problem_user | secret1234 | Epic sadface: Username and password do not match any user in this service |
