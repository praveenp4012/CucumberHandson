package taggedhooksincucumber;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.KeyDownAction;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefinitionForTaggedHooks {
	
	@Before
	public void setUp() {
		System.out.println("Before anything");
	}
	
	@After
	public void tearDown() {
		System.out.println("After everything");
	}
	
	@Before("@First")
	public void forFirstScenario1() {
		System.out.println("Tagged Before for First Scenario");
	}
	
	@After("@First")
	public void forFirstScenario2() {
		System.out.println("Tagged After for First Scenario");
	}

	@When("^clicking on login page$")
	public void clicking_on_login_page() throws Throwable {

	}

	@Then("^login page should be opened$")
	public void login_page_should_be_opened() throws Throwable {

	}

	@When("^clicking on home page$")
	public void clicking_on_home_page() throws Throwable {

	}

	@Then("^home page should be opened$")
	public void home_page_should_be_opened() throws Throwable {

	}

	@When("^clicking on items page$")
	public void clicking_on_items_page() throws Throwable {

	}

	@Then("^items page should be opened$")
	public void items_page_should_be_opened() throws Throwable {

	}

}
