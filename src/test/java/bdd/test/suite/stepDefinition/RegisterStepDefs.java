package bdd.test.suite.stepDefinition;

import java.util.Map;

import bdd.test.suite.testSteps.RegisterUserSteps;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;

public class RegisterStepDefs {

	@Steps
	RegisterUserSteps registerSteps;

	@Then("^I have to click on first register button$")
	public void clickonfirstregisterbutton() {
		registerSteps.clickOnFirstRegister();
	}

	@Then("^I have to choose the register personal account$")
	public void clickOnPersonalAccountReg() {
		registerSteps.clickOnPersonalAccountReg();
	}

	@When("^Click next button$")
	public void click_next_button() {
		registerSteps.clickOnNextButton();
	}

	@Then("^I fill the create your login details form$")
	public void accountForm(DataTable table) {
		for (Map<String, String> row : table.asMaps(String.class, String.class)) {
			String field = row.get("Field");
			String value = row.get("Value");
			fillAccountForm(field, value);
		}
	}

	@Then("^I have to click on next button$")
	public void clickNextButton() throws Exception {
		registerSteps.clickOnNextRegButton();
	}

	@Then("^I fill the personal details form$")
	public void personaDetailsForm(DataTable table) {
		for (Map<String, String> row : table.asMaps(String.class, String.class)) {
			String field = row.get("Field");
			String value = row.get("Value");
			fillPersonalForm(field, value);
		}
	}

	private void fillAccountForm(String field, String value) {
		switch (field) {

		case "Email":
			registerSteps.setEmailIdReg(value);
			break;

		case "Password":
			registerSteps.setPasswordReg(value);
			break;
		}
	}

	private void fillPersonalForm(String field, String value) {
		switch (field) {

		case "FirstName":
			registerSteps.firstNameField(value);
			break;

		case "LastName":
			registerSteps.lastNameField(value);
			break;

		case "Date":
			registerSteps.selectDate(value);
			break;

		case "Month":
			registerSteps.selectMonth(value);
			break;

		case "Year":
			registerSteps.selectYear(value);
			break;

		case "Country":
			registerSteps.selectCountry(value);
			break;

		case "PostCode":
			registerSteps.selectPostcode(value);
			break;
		}
	}
}
