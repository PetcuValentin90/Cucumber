/**
 * Created by liviu.petcu on 5/10/2017.
 */

package com.ro;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".",
        tags   ="@live",
        dryRun = false,
        strict = false,
        format ={"pretty","html:target/html/"}
    )
public class CucumberRunTest {}
