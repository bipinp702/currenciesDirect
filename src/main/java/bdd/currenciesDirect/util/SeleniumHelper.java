package bdd.currenciesDirect.util;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import static org.junit.Assert.*;

import net.serenitybdd.core.pages.PageObject;

public class SeleniumHelper extends PageObject {

	public SeleniumHelper(WebDriver driver) {
		super(driver);
	}

	public void mouseHover(WebElement locator) {
		Actions action = new Actions(getDriver());
		action.moveToElement(locator).build().perform();
	}

	public void assertText(WebElement locator, String expectedText) {
		String actual = locator.getText().trim();
		String expected = expectedText.trim();
		assertEquals(actual, expected);
	}

	public void jsClick(WebElement locator) {
		JavascriptExecutor executor = (JavascriptExecutor) getDriver();
		executor.executeScript("arguments[0].click();", locator);
	}
	
	public void switchToFrameById(String frameId) {
		getDriver().switchTo().frame(frameId);
	}
}
