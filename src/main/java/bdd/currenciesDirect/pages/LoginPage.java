package bdd.currenciesDirect.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import bdd.currenciesDirect.util.SeleniumHelper;
import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

public class LoginPage extends SeleniumHelper {

	public LoginPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(xpath = "//*[@aria-controls='chooseLoginType'][contains(@class,'pill')]")

	private WebElementFacade loginPill;

	@FindBy(xpath = "//a[contains(@class,'accountButtonPersonal track-pfx-login')]")

	private WebElementFacade personalAccount;

	@FindBy(id = "login_userName_input")

	private WebElementFacade emailField;

	@FindBy(id = "login_password_input")

	private WebElementFacade passwordField;

	@FindBy(id = "login_link2")

	private WebElementFacade loginButton;

	@FindBy(xpath = "//*[@for='login_userName_input']/following-sibling::span[@class='error']")

	private WebElementFacade userEmailErrorMessage;

	@FindBy(xpath = "//*[@for='login_password_input']/following-sibling::span[@class='error']")

	private WebElementFacade userPasswordErrorMessage;

	@FindBy(xpath = "//*[contains(@class,'modal-close')][@onclick='languageChange()']")
	private WebElementFacade langaugeChange;

	@FindBy(xpath = "//a[contains(text(),'Close')][@target]")

	private WebElementFacade closeButtonSignIn;

	public void clickOnFirstLogin() {
		clickOn(loginPill);
	}

	public void clickOnPersonalAccount() {
		clickOn(personalAccount);
	}

	public void setEmailId(String value) {
		typeInto(emailField, value);
	}

	public void setPasswordValue(String value) {
		typeInto(passwordField, value);
	}

	public void clickLoginButton() {
		clickOn(loginButton);
	}

	public void clickonCloseLangaugePopUp() {
		clickOn(langaugeChange);
	}

	public void clickOnCloseSignIn() {
		clickOn(closeButtonSignIn);
	}

	public void errorMessageEmail(String value) {
		assertText(userEmailErrorMessage, value);
	}

	public void errorMessagePassword(String value) {
		assertText(userPasswordErrorMessage, value);
	}

	public void launchApplication(String arg1) {
		getDriver().manage().deleteAllCookies();
		getDriver().manage().window().maximize();
		getDriver().manage().timeouts().implicitlyWait(3, TimeUnit.MINUTES);
		getDriver().manage().timeouts().pageLoadTimeout(3, TimeUnit.MINUTES);
		getDriver().get(arg1);
	}
}
