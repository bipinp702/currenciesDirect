$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "  I want to verify the login functionality with valid and invalid test cases",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "TC_01 Login with valid credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@positiveLogin"
    }
  ]
});
formatter.step({
  "name": "I want to launch the application \"https://www.currenciesdirect.com/en\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.launchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to click on first login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.clickfirstLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to choose the personal account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.choosePersonalAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Close icon",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.langaugeChange()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user email id \"valid@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.userEmailId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user password \"validPass\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.userPassword(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ROYALCOM-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\ROYALC~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62309}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ad1534d7ad5efc093798782e7670b55b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getTagName(RemoteWebElement.java:122)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getTagName(WebElementFacadeImpl.java:1107)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy22.getTagName(Unknown Source)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getTagName(WebElementFacadeImpl.java:1107)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations.isAFormElement(WebElementExpectations.java:162)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations.isDisabledField(WebElementExpectations.java:158)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations.access$000(WebElementExpectations.java:10)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:64)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:55)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:960)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:802)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.type(WebElementFacadeImpl.java:683)\r\n\tat net.serenitybdd.core.pages.PageObject.typeInto(PageObject.java:535)\r\n\tat bdd.currenciesDirect.pages.LoginPage.setPasswordValue(LoginPage.java:65)\r\n\tat bdd.test.suite.testSteps.LoginSteps.setPasswordValue(LoginSteps.java:31)\r\n\tat bdd.test.suite.testSteps.LoginSteps$$EnhancerByCGLIB$$2e6161a3.CGLIB$setPasswordValue$4(\u003cgenerated\u003e)\r\n\tat bdd.test.suite.testSteps.LoginSteps$$EnhancerByCGLIB$$2e6161a3$$FastClassByCGLIB$$4103cf44.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat bdd.test.suite.testSteps.LoginSteps$$EnhancerByCGLIB$$2e6161a3.setPasswordValue(\u003cgenerated\u003e)\r\n\tat bdd.test.suite.stepDefinition.LoginStepDefs.userPassword(LoginStepDefs.java:36)\r\n\tat ✽.I enter the user password \"validPass\"(feature/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I land in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.homePageLanding()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "TC_02 Login with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.step({
  "name": "I want to launch the application \"https://www.currenciesdirect.com/en\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I have to click on first login button",
  "keyword": "Then "
});
formatter.step({
  "name": "I have to choose the personal account",
  "keyword": "Then "
});
formatter.step({
  "name": "Click Close icon",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter the user email id \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the user password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "name": "I have to verify the error message for \"\u003cField\u003e\" and the message is \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "Field",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "",
        "validPass",
        "Email Required",
        "Required field"
      ]
    },
    {
      "cells": [
        "test@gmail.com",
        "",
        "Password Required",
        "Required field"
      ]
    },
    {
      "cells": [
        "dsfd",
        "validPass",
        "Email Format",
        "Please enter a valid email address"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC_02 Login with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.step({
  "name": "I want to launch the application \"https://www.currenciesdirect.com/en\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.launchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to click on first login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.clickfirstLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to choose the personal account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.choosePersonalAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Close icon",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.langaugeChange()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user email id \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.userEmailId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user password \"validPass\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.userPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to verify the error message for \"Email Required\" and the message is \"Required field\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.verifyErrorMessage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 Login with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.step({
  "name": "I want to launch the application \"https://www.currenciesdirect.com/en\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.launchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to click on first login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.clickfirstLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to choose the personal account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.choosePersonalAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Close icon",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.langaugeChange()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user email id \"test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.userEmailId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user password \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.userPassword(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027ROYALCOM-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\ROYALC~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62602}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d980a716315467cb666797a450f6fca2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:118)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.clear(WebElementFacadeImpl.java:1071)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy22.clear(Unknown Source)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.clear(WebElementFacadeImpl.java:1071)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.type(WebElementFacadeImpl.java:684)\r\n\tat net.serenitybdd.core.pages.PageObject.typeInto(PageObject.java:535)\r\n\tat bdd.currenciesDirect.pages.LoginPage.setPasswordValue(LoginPage.java:65)\r\n\tat bdd.test.suite.testSteps.LoginSteps.setPasswordValue(LoginSteps.java:31)\r\n\tat bdd.test.suite.testSteps.LoginSteps$$EnhancerByCGLIB$$2e6161a3.CGLIB$setPasswordValue$4(\u003cgenerated\u003e)\r\n\tat bdd.test.suite.testSteps.LoginSteps$$EnhancerByCGLIB$$2e6161a3$$FastClassByCGLIB$$4103cf44.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:449)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:434)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:409)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:150)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:137)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\r\n\tat bdd.test.suite.testSteps.LoginSteps$$EnhancerByCGLIB$$2e6161a3.setPasswordValue(\u003cgenerated\u003e)\r\n\tat bdd.test.suite.stepDefinition.LoginStepDefs.userPassword(LoginStepDefs.java:36)\r\n\tat ✽.I enter the user password \"\"(feature/Login.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I have to verify the error message for \"Password Required\" and the message is \"Required field\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.verifyErrorMessage(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC_02 Login with invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negativeLogin"
    }
  ]
});
formatter.step({
  "name": "I want to launch the application \"https://www.currenciesdirect.com/en\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.launchApplication(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to click on first login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.clickfirstLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to choose the personal account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.choosePersonalAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Close icon",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.langaugeChange()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user email id \"dsfd\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.userEmailId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user password \"validPass\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.userPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have to verify the error message for \"Email Format\" and the message is \"Please enter a valid email address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.verifyErrorMessage(String,String)"
});
formatter.result({
  "status": "passed"
});
});