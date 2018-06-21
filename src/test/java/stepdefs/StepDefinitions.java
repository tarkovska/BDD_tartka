package stepdefs;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class StepDefinitions {

    private static WebDriver driver;

    @Given("^I am on the \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void i_am_on_the_page_on_URL(String arg1, String arg2) throws Throwable {
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(arg2);
//        throw new PendingException();
    }

    /*Scenario: Search
    Given I am on the "Company home" page on URL "http://tartka.com.ua/en/"
    When I fill in "search" with "soutage"
    And I click on the "Enter" button
    Then I am on the "Search result" page*/

    @When("^I fill in with \"([^\"]*)\"$")
    public void i_fill_in_with(String arg2) throws Throwable {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement search = driver.findElement(By.xpath("//div[@class = 'form-search-right']/input[@type = 'text']"));
        search.click();
        search.sendKeys(arg2);
        WebElement searchFinish = driver.findElement(By.xpath("//div[@class = 'search-view-more']/a[@href = 'http://tartka.com.ua?s=soutage&post_type=product']"));
        searchFinish.click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //throw new PendingException();
    }

    @Then("^I am on the \"([^\"]*)\" page$")
    public void i_should_see_the_button(String arg1) throws Throwable {
        String searchResult = driver.getCurrentUrl();
        Assert.assertEquals(arg1, searchResult);
        //throw new PendingException();
    }


}
