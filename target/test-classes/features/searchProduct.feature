@live
Feature: Search product
  As a end user I want to search a product and add to cart

  @sanity
  Scenario Outline: Search for a product and sort by index nr : "<sortOptionIndex>"
    Given I am on home page "<URL>"
    When I search for a product "<product>"
    Then I see respective product in title "<product>"
    Then I sort by "<sortOptionIndex>"

    Examples:
    |       URL         |  product     | sortOptionIndex |
    |  http://emag.ro   |  iphone      |        5        |
    |  http://emag.ro   |  laptop      |        2        |
    |  http://emag.ro   |  aragaz      |        3        |
    |  http://emag.ro   |  masina tuns |        4        |


#  @regression
#  Scenario: Search a laptop
#    Given I am on home page "http://emag.ro"
#    When I search for a product "laptop"
#    Then I see respective product in title "laptop"