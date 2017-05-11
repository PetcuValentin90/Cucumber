/**
 * Created by liviu.petcu on 5/10/2017.
 */
package com.ro;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks
{

    @Before
    public void  setUp()
    {
        new DriverManager().openBrowser();
    }

    @After
    public void tearDown()
    {
        new DriverManager().closeBrowser();
    }


    @After
    public static void afterFailedScenario(Scenario scenario) {
        if (scenario.isFailed()) {
            scenario.write( "Print to report");
        }
    }


}
