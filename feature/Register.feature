#Author: bipin
@register @regression
Feature: Register Functionality
  I want to verify the register functionality with valid test cases

  Scenario: I want to enter deatils on the fields present on register page.
    Given I want to launch the application "https://www.currenciesdirect.com/en"
    Then I have to click on first register button
    Then I have to choose the register personal account
    Then I fill the create your login details form
      | Field    | Value           |
      | Email    | tes90@gmail.com |
      | Password | Test@123        |
    Then Click next button
    Then I fill the personal details form
      | Field     | Value    |
      | FirstName | Bipin    |
      | LastName  | Patil    |
      | Date      |        1 |
      | Month     | December |
      | Year      |     1995 |
      | Country   | Spain    |
      | PostCode  | Calle    |
    Then I have to click on next button
