package bdd.test.suite.cucumberTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumber-html-target" }, 
features = { "feature" },
glue = {"bdd.test.suite.stepDefinition" },
tags = {"@regression"})
public class CucumberTestSuite {
}
