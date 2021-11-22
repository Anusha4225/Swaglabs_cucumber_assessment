package stepdefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Loginstepdefs {
	
	 WebDriver driver = BaseClass.driver;
	 
	@Given("^User has started the Swag Lab Application$")
    public void user_has_started_the_swag_lab_application() throws Throwable {
		driver.get("https://www.saucedemo.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
    
        WebDriverWait wait = new WebDriverWait(driver,30);
        
    }

    @When("^User enters username \"([^\"]*)\"$")
    public void user_enters_username_something(String UserNameVal) throws Throwable {
    	WebElement UserName = driver.findElement(By.xpath("//input[@name='user-name']"));
		UserName.sendKeys(UserNameVal);
    }

   

    @And("^User enters password \"([^\"]*)\"$")
    public void user_enters_password_something(String PasswordVal) throws Throwable {
    	WebElement Password = driver.findElement(By.xpath("//input[@name='password']"));
		Password.sendKeys(PasswordVal);
    }

    @And("^User clicks the Login Button$")
    public void user_clicks_the_login_button() throws Throwable {
    	WebElement LoginButton = driver.findElement(By.xpath("//input[@id='login-button']"));
		LoginButton.click();
    }
    
    @Then("^User should be landed on the Products Page$")
    public void user_should_be_landed_on_the_products_page() throws Throwable {
    	WebElement check_status = driver.findElement(By.xpath("//*[@id=\"header_container\"]/div[2]/span"));
		
		String Expected ="PRODUCTS";
		Assert.assertEquals(Expected, check_status.getText());
    }

    @Then("^User should be getting the \"([^\"]*)\"$")
    public void user_should_be_getting_the_something(String error) {
    	WebElement error_button = driver.findElement(By.xpath("//h3[contains(text(),'Epic sadface: Username and password do not match any user in this service')]"));
        Assert.assertEquals(error, error_button.getText()); 
    }
    
    
}
