package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class Product_add {
	WebDriver driver = BaseClass.driver;
	
	@And("^User added a product \"([^\"]*)\"$")
    public void user_added_a_product_something(String productname) throws Throwable {
		WebElement add = driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='" + productname + "']/following::button[1]"));
		add.click();
    }
	
	@Then("^User should be added to the cart$")
    public void user_should_be_added_to_the_cart() throws Throwable {
		WebElement cart_verify = driver.findElement(By.xpath("//*[@class='shopping_cart_badge']"));
		Assert.assertEquals("1", cart_verify.getText());
    }
   

}
