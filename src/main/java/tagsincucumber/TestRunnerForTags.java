package tagsincucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "F:\\Selenium\\CucumberHandson\\src\\main\\java\\features\\tagsDemo.feature",
		glue = {"tagsincucumber" }, 
		format = { "pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-output/cucumber.xml" },
		dryRun = false,
		strict = false,
		monochrome = true,
		tags = {"@regression" , "~@endtoend"})
public class TestRunnerForTags {

}
