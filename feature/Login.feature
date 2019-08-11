#Author: bipin
@login @regression
Feature: Login Functionality
  I want to verify the login functionality with valid and invalid test cases

  @positiveLogin
  Scenario: TC_01 Login with valid credential
    Given I want to launch the application "https://www.currenciesdirect.com/en"
    Then I have to click on first login button  
    Then I have to choose the personal account
    Then Click Close icon
    When I enter the user email id "valid@gmail.com"
    And I enter the user password "validPass"
    And click login button
    Then I land in home page

  @negativeLogin
  Scenario Outline: TC_02 Login with invalid credential
    Given I want to launch the application "https://www.currenciesdirect.com/en"
    Then I have to click on first login button    
    Then I have to choose the personal account
    Then Click Close icon
    When I enter the user email id "<Email>"
    And I enter the user password "<Password>"
    And click login button
    Then I have to verify the error message for "<Field>" and the message is "<ErrorMessage>"

    Examples: 
      | Email          | Password  | Field             | ErrorMessage                       |
      |                | validPass | Email Required    | Required field                     |
      | test@gmail.com |           | Password Required | Required field                     |
      | dsfd           | validPass | Email Format      | Please enter a valid email address |
