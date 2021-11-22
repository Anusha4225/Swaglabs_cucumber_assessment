@ProductFeature
Feature: Products Selection

  Scenario Outline: Verify the login with correct username and password
    Given User has started the Swag Lab Application
    When User enters username "<UserName>"
    And User enters password "<Password>"
    And User clicks the Login Button
    And User added a product "<Product_Name>"
    Then User should be added to the cart

    Examples: 
      | UserName     | Password     | Product_Name        |
      | problem_user | secret_sauce | Sauce Labs Backpack |
