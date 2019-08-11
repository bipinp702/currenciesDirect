package bdd.currenciesDirect.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import bdd.currenciesDirect.util.SeleniumHelper;
import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

public class RegisterPage extends SeleniumHelper {

	public RegisterPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(css = "a.button.pill.create.show-for-large.getstarted.track-select-register")

	private WebElementFacade registerPill;

	@FindBy(xpath = "//a[contains(@class,'accountButtonPersonal track-pfx-register')]")

	private WebElementFacade personalAccountReg;

	@FindBy(id = "verify_email_add")

	private WebElementFacade emailIdReg;

	@FindBy(id = "login_password_input")

	private WebElementFacade passwordFieldReg;

	@FindBy(id = "verifyEmail_btn")

	private WebElementFacade nextButtonReg;

	@FindBy(id = "primaryInfo_firstName_input")

	private WebElementFacade firstName;

	@FindBy(id = "primaryInfo_lastName_input")

	private WebElementFacade lastName;

	@FindBy(xpath = "//*[contains(@id,'dob-day-container')]")

	private WebElementFacade dayField;

	@FindBy(xpath = "//*[contains(@id,'dob-month-container')]")

	private WebElementFacade monthField;

	@FindBy(xpath = "//*[contains(@id,'dob-year-container')]")

	private WebElementFacade yearField;

	@FindBy(xpath = "//span[contains(@id,'primaryInfo_con_select')]")

	private WebElementFacade countryField;

	@FindBy(id = "primaryInfo_cont_btn")

	private WebElementFacade nextButtonDetails;

	@FindBy(id = "addressSearchField")

	private WebElementFacade addressSearchField;
	
	@FindBy(id = "addressSearchField")

	private WebElement addressSearchFieldEnter;

	@FindBy(css = "div.pcaitem.pcaexpandable.pcaselected")

	private WebElementFacade selectedCountryCode;

	public void clickOnFirstRegister() {
		jsClick(registerPill);
	}

	public void clickOnPersonalAccountRegister() {
		clickOn(personalAccountReg);
	}

	public void setEmailIdReg(String value) {
		typeInto(emailIdReg, value);
	}

	public void setPasswordReg(String value) {
		typeInto(passwordFieldReg, value);
	}

	public void clickOnNextButton() {
		clickOn(nextButtonReg);
	}

	public void launchApplicationReg(String arg1) {
		getDriver().manage().deleteAllCookies();
		getDriver().manage().window().maximize();
		getDriver().manage().timeouts().implicitlyWait(3, TimeUnit.MINUTES);
		getDriver().manage().timeouts().pageLoadTimeout(3, TimeUnit.MINUTES);
		getDriver().get(arg1);
	}

	public void setFirstName(String value) {
		typeInto(firstName, value);
	}

	public void setLastName(String value) {
		typeInto(lastName, value);
	}

	public void selectDate(String value) {
		clickOn(dayField);
		clickOn(getDriver().findElement(By.xpath("//li[contains(@id,'dob-day')][contains(text(),'" + value + "')]")));
	}

	public void selectMonth(String value) {
		clickOn(monthField);
		clickOn(getDriver().findElement(By.xpath("//li[contains(@id,'dob-month')][contains(text(),'" + value + "')]")));
	}

	public void selectYear(String value) {
		clickOn(yearField);
		clickOn(getDriver().findElement(By.xpath("//li[contains(@id,'dob-year')][contains(text(),'" + value + "')]")));
	}

	public void selectCountry(String value) {
		clickOn(countryField);
		clickOn(getDriver().findElement(
				By.xpath("//li[contains(@id,'primaryInfo_con_select_')][contains(text(),'" + value + "')]")));
	}

	public void selectPostcode(String value) {
		typeInto(addressSearchField, value);
		try {
			Thread.sleep(8000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		jsClick(getDriver().findElement(By.xpath("(//b[contains(text(),'" + value + "')])[1]")));
		addressSearchFieldEnter.sendKeys(Keys.ARROW_DOWN);
		addressSearchFieldEnter.sendKeys(Keys.ENTER);
	}

	public void nextRegButtonDetails() {
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		clickOn(nextButtonDetails);
	}
}
