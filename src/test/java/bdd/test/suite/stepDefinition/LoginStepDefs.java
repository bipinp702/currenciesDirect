package bdd.test.suite.stepDefinition;

import bdd.test.suite.testSteps.LoginSteps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;

public class LoginStepDefs {

	@Steps
	LoginSteps loginSteps;

	@Given("^I want to launch the application \"([^\"]*)\"$")
	public void launchApplication(String arg1) {
		loginSteps.launchApplication(arg1);
	}

	@Then("^I have to click on first login button$")
	public void clickfirstLoginButton() {
		loginSteps.clickOnFirstLogin();
	}

	@Then("^I have to choose the personal account$")
	public void choosePersonalAccount() {
		loginSteps.clickOnPersonalAccount();
	}

	@When("^I enter the user email id \"([^\"]*)\"$")
	public void userEmailId(String arg1) {
		loginSteps.setEmailId(arg1);
	}

	@When("^I enter the user password \"([^\"]*)\"$")
	public void userPassword(String arg1) {
		loginSteps.setPasswordValue(arg1);
	}

	@When("^click login button$")
	public void clickLoginButton() {
		loginSteps.clickLoginButton();
	}

	@When("^Click Close icon$")
	public void langaugeChange() {
		loginSteps.langaugeChange();
	}

	@When("^Click Close icon of sign up page$")
	public void clickOnCloseSignIn() {
		loginSteps.signUpCloseButton();
	}

	@Then("^I land in home page$")
	public void homePageLanding() {
		System.out.println("I'm in home page");
	}

	@Then("^I have to verify the error message for \"([^\"]*)\" and the message is \"([^\"]*)\"$")
	public void verifyErrorMessage(String input, String value) {
		if (input.equalsIgnoreCase("Email Required")) {
			loginSteps.errorMessageEmail(value);
		} else if (input.equalsIgnoreCase("Password Required")) {
			//String val = value.replace("trim", "");
			loginSteps.errorMessagePassword(value);
		} else if (input.equalsIgnoreCase("Email Format")) {
			loginSteps.errorMessageEmail(value);
		}
	}

}
