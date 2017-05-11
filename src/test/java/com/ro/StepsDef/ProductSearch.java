/**
 * Created by liviu.petcu on 5/10/2017.
 */

package com.ro.StepsDef;

import com.ro.Elements;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ProductSearch
{
    Elements elements = new Elements();


    @Given("^I am on home page \"([^\"]*)\"$")
    public void iNavigateToUrl(String URL) throws Throwable {
        elements.goToHomePage(URL);
    }

    @When("^I search for a product \"([^\"]*)\"$")
    public void iSearchForProduct(String product) throws Throwable {
        elements.searchForAProduct(product);
    }


    @Then("^I see respective product in title \"([^\"]*)\"$")
    public void iSeeProductInTitle(String product) throws Throwable {
      elements.checkProductInTitle(product);
    }

    @Then("^I sort by \"([^\"]*)\"$")
    public void i_sort_by(Integer sortOptionIndex) throws Throwable {
        elements.selectSortOption(sortOptionIndex);
    }
}
