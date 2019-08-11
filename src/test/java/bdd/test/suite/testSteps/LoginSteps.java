package bdd.test.suite.testSteps;

import bdd.currenciesDirect.pages.LoginPage;
import net.thucydides.core.annotations.Step;

public class LoginSteps {
	
	LoginPage loginPage;

	@Step	
	public void clickOnFirstLogin()
	{
		loginPage.clickOnFirstLogin();	
	}
	
	@Step
	public void clickOnPersonalAccount()
	{
		loginPage.clickOnPersonalAccount();
	}
	
	@Step
	public void setEmailId(String value)
	{
		loginPage.setEmailId(value);
	}
	
	@Step
	public void setPasswordValue(String value)
	{
		loginPage.setPasswordValue(value);
	}
	
	@Step
	public void clickLoginButton()
	{
		loginPage.clickLoginButton();
	}

	@Step
	public void launchApplication(String arg1) {
		loginPage.launchApplication(arg1);
	}
	
	@Step
	public void langaugeChange()
	{
		loginPage.clickonCloseLangaugePopUp();
	}
	
	@Step
	public void signUpCloseButton()
	{
		loginPage.clickOnCloseSignIn();
	}
	@Step
	public void errorMessageEmail(String value) {
		loginPage.errorMessageEmail(value);
	}
	
	@Step
	public void errorMessagePassword(String value) {
		loginPage.errorMessagePassword(value);
	}
}
