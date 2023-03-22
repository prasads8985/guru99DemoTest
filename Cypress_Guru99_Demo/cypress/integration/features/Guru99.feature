@feature-tag
Feature: Test the Demo99 application


  Scenario: Opening a Guru99 Demo site
    Given I open Demo99 test page

 Scenario: Perform login with Wong Credentilas
    When Perform Login with Username "TESTXYZ" and Password "TESTXYZ"
    Then Verify the text should be "Enter your Email address and password correct"

 Scenario: Perform login with Correct Username and Wrong password
    When Perform Login with Username "pessu071@gmail.com" and Password "TESTXYZ"
    Then Verify the text should be "Enter your Email address and password correct"

 Scenario: Perform login with Wrong Username and Correct password
    When Perform Login with Username "TESTXYZ" and Password "Mobile"
    Then Verify the text should be "Enter your Email address and password correct"

 Scenario: Perform login with Correct Username and Correct password > Perfecr login
    When Perform Login with Username "pessu071@gmail.com" and Password "Mobile"
    Then Verify the text should be present "Broker Insurance WebPage"

Scenario: Verify Request Quotation
    When User Perfrom Request Quotation
    Then Save identification Number

Scenario: Verify Retrieve Quotation
    When Navigate Back
    Then User Perfrom Retrieve Quotation
    And Verify Retrieve Quotation page


Scenario: Verify Profile info
    When Navigate Back
    Then Select Profile info
    And Verify Profile page


Scenario: Verify Edit Profile
    Then Select Edit Profile info
    And Verify Edit Profile page

