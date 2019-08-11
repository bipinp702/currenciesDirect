package bdd.test.suite.testSteps;

import bdd.currenciesDirect.pages.RegisterPage;
import net.thucydides.core.annotations.Step;

public class RegisterUserSteps {
	
	RegisterPage registerPage;
	
	@Step
	public void clickOnFirstRegister()
	{
		registerPage.clickOnFirstRegister();	
	}

	@Step
	public void clickOnPersonalAccountReg()
	{
		registerPage.clickOnPersonalAccountRegister();
	}
	
	@Step
	public void setEmailIdReg(String value)
	{
		registerPage.setEmailIdReg(value);
	}
	
	@Step
	public void setPasswordReg(String value)
	{
		registerPage.setPasswordReg(value);
	}
	
	@Step
	public void clickOnNextButton()
	{
		registerPage.clickOnNextButton();
	}
	
	@Step
	public void launchApplicationReg(String arg1) {
		registerPage.launchApplicationReg(arg1);
	}
	
	@Step
	public void firstNameField(String value)
	{
		registerPage.setFirstName(value);
	}
	
	@Step
	public void lastNameField(String value)
	{
		registerPage.setLastName(value);
	}
	
	@Step
	public void selectDate(String value)
	{
		registerPage.selectDate(value);
	}
	
	@Step
	public void selectMonth(String value)
	{
		registerPage.selectMonth(value);
	}
	
	@Step
	public void selectYear(String value)
	{
		registerPage.selectYear(value);
	}
	
	@Step
	public void selectCountry(String value)
	{
		registerPage.selectCountry(value);
	}
	
	@Step
	public void selectPostcode(String value)
	{
		registerPage.selectPostcode(value);
	}
	
	@Step
	public void clickOnNextRegButton()
	{
		registerPage.nextRegButtonDetails();
	}
	
}
