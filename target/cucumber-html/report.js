$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify the login with correct username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has started the Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on the Products Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the login with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has started the Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_started_the_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has started the Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be getting the \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret1234",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has started the Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_started_the_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be getting the \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_getting_the_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "Products Selection",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify the login with correct username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has started the Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User added a product \"\u003cProduct_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should be added to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Product_Name"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the login with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has started the Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_started_the_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User added a product \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "Product_add.user_added_a_product_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Product_add.user_should_be_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});