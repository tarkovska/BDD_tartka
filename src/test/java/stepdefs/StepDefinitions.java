package stepdefs;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.And;
import org.junit.Test;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class StepDefinitions {

    private static WebDriver driver;

    @Given("^I am on the \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void i_am_on_the_page_on_URL(String arg1, String arg2) throws Throwable {
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(arg2);
    }

    @When("^I fill in with \"([^\"]*)\"$")
    public void i_fill_in_with(String arg2) throws Throwable {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement search = driver.findElement(By.xpath("//div[@class = 'form-search-right']/input[@type = 'text']"));
        search.click();
        search.sendKeys(arg2);
        WebElement searchFinish = driver.findElement(By.xpath("//div[@class = 'search-view-more']/a[@href = 'http://tartka.com.ua?s=soutage&post_type=product']"));
        searchFinish.click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @Then("^I am on the \"([^\"]*)\" page$")
    public void i_should_see_the_button(String arg1) throws Throwable {
        String searchResult = driver.getCurrentUrl();
        Assert.assertEquals(arg1, searchResult);
    }

    @And("^I click on the first product$")
    public void i_click_on_first_product() throws Throwable {
        List<WebElement> searchList = driver.findElements(By.xpath("//div[@class = 'product-info']/h3[@class = 'product-name p-font']/a"));
        searchList.get(0).click();
    }

    @And("^I put it to cart$")
    public void i_put_it_to_cart() throws Throwable {
        WebElement addToCart = driver.findElement(By.name("add-to-cart"));
        addToCart.click();
    }
    @Then("^I go to my cart$")
    public void i_go_to_cart() throws Throwable {
        WebElement goToCart = driver.findElement(By.xpath("//div[@class = 'woocommerce-message']/a[@href = 'http://tartka.com.ua/en/cart-2/']"));
        goToCart.click();
    }

    @Then("^I proceed to checkout$")
    public void i_proceed_to_checkout() throws Throwable {
        WebElement order = driver.findElement(By.xpath("//table[@class = 'shop_table shop_table_responsive cart woocommerce-cart-form__contents']/tbody/tr[2]/td/a"));
        order.click();
    }

    @And("^Fill customer's name \"([^\"]*)\"$")
    public void fill_customer_name(String arg1) throws Throwable {
        WebElement name = driver.findElement(By.id("billing_first_name"));
        name.click();
        name.sendKeys(arg1);
    }
    @And("^Fill customer's surname \"([^\"]*)\"$")
    public void fill_customer_surname(String arg1) throws Throwable {
        WebElement surname = driver.findElement(By.id("billing_last_name"));
        surname.click();
        surname.sendKeys(arg1);
    }

    @And("^Fill customer's email \"([^\"]*)\"$")
    public void fill_customer_email(String arg1) throws Throwable {
        WebElement email = driver.findElement(By.id("billing_email"));
        email.click();
        email.sendKeys(arg1);
    }

    @And("^Fill customer's phone \"([^\"]*)\"$")
    public void fill_customer_phone(String arg1) throws Throwable {
        WebElement phone = driver.findElement(By.id("billing_phone"));
        phone.click();
        phone.sendKeys(arg1);
    }

    @And("^Click terms$")
    public void click_terms() throws Throwable {
        WebElement terms = driver.findElement(By.id("terms"));
        terms.sendKeys(Keys.SPACE);
    }

    @Then("^I checkout$")
    public void i_checkout() throws Throwable {
        WebElement placeOrder = driver.findElement(By.id("place_order"));
        placeOrder.sendKeys(Keys.ENTER);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement notification = driver.findElement(By.xpath("//div[@class='woocommerce-order']/p"));
        Assert.assertEquals(notification.getText(), "Thank you. Your order has been received.");
    }
}
