/**
 * Created by liviu.petcu on 5/10/2017.
 */
package com.ro;

import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.support.ui.Select;


public class Elements extends DriverManager
{

    public void goToHomePage(String arg1){
        driver.get(arg1);
    }

    public void searchForAProduct(String product){
        waitForLoad(driver);
        driver.findElement(By.id("emg-input-autosuggest")).sendKeys(product);
        driver.findElement(By.id("emg-category-menu-icon")).click();
    }

    public void checkProductInTitle(String product) throws InterruptedException {
        waitForLoad(driver);
        TimeUnit.SECONDS.sleep(2);
        Assert.assertTrue(driver.getTitle().contains(product));
    }

    public void selectSortOption(Integer sortOptionIndex) throws InterruptedException {

        driver.findElement(By.className("sort-control-btn-dropdown")).click();
        driver.findElement(By.xpath("//ul[@class='dropdown-menu']/li["+sortOptionIndex+"]/a")).click();
        TimeUnit.SECONDS.sleep(3);
    }


}
