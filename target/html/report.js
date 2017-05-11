$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/searchProduct.feature");
formatter.feature({
  "line": 2,
  "name": "Search product",
  "description": "As a end user I want to search a product and add to cart",
  "id": "search-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@live"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search for a product and sort by index nr : \"\u003csortOptionIndex\u003e\"",
  "description": "",
  "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a product \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see respective product in title \"\u003cproduct\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I sort by \"\u003csortOptionIndex\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";",
  "rows": [
    {
      "cells": [
        "URL",
        "product",
        "sortOptionIndex"
      ],
      "line": 13,
      "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;1"
    },
    {
      "cells": [
        "http://emag.ro",
        "iphone",
        "5"
      ],
      "line": 14,
      "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;2"
    },
    {
      "cells": [
        "http://emag.ro",
        "laptop",
        "2"
      ],
      "line": 15,
      "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;3"
    },
    {
      "cells": [
        "http://emag.ro",
        "aragaz",
        "3"
      ],
      "line": 16,
      "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;4"
    },
    {
      "cells": [
        "http://emag.ro",
        "masina tuns",
        "4"
      ],
      "line": 17,
      "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3665973940,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for a product and sort by index nr : \"5\"",
  "description": "",
  "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@live"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page \"http://emag.ro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a product \"iphone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see respective product in title \"iphone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I sort by \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://emag.ro",
      "offset": 19
    }
  ],
  "location": "ProductSearch.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 3682822505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone",
      "offset": 24
    }
  ],
  "location": "ProductSearch.iSearchForProduct(String)"
});
formatter.result({
  "duration": 4460654031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone",
      "offset": 35
    }
  ],
  "location": "ProductSearch.iSeeProductInTitle(String)"
});
formatter.result({
  "duration": 2142586716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "ProductSearch.i_sort_by(Integer)"
});
formatter.result({
  "duration": 3747351403,
  "status": "passed"
});
formatter.after({
  "duration": 112009,
  "status": "passed"
});
formatter.after({
  "duration": 1058782553,
  "status": "passed"
});
formatter.before({
  "duration": 2296038695,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search for a product and sort by index nr : \"2\"",
  "description": "",
  "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@live"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page \"http://emag.ro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a product \"laptop\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see respective product in title \"laptop\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I sort by \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://emag.ro",
      "offset": 19
    }
  ],
  "location": "ProductSearch.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 3793781793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laptop",
      "offset": 24
    }
  ],
  "location": "ProductSearch.iSearchForProduct(String)"
});
formatter.result({
  "duration": 3092805891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laptop",
      "offset": 35
    }
  ],
  "location": "ProductSearch.iSeeProductInTitle(String)"
});
formatter.result({
  "duration": 2271345078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "ProductSearch.i_sort_by(Integer)"
});
formatter.result({
  "duration": 3693323629,
  "status": "passed"
});
formatter.after({
  "duration": 27221,
  "status": "passed"
});
formatter.after({
  "duration": 953259021,
  "status": "passed"
});
formatter.before({
  "duration": 2213891454,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search for a product and sort by index nr : \"3\"",
  "description": "",
  "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@live"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page \"http://emag.ro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a product \"aragaz\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see respective product in title \"aragaz\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I sort by \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://emag.ro",
      "offset": 19
    }
  ],
  "location": "ProductSearch.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 3541129179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aragaz",
      "offset": 24
    }
  ],
  "location": "ProductSearch.iSearchForProduct(String)"
});
formatter.result({
  "duration": 2549679303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aragaz",
      "offset": 35
    }
  ],
  "location": "ProductSearch.iSeeProductInTitle(String)"
});
formatter.result({
  "duration": 2260039815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "ProductSearch.i_sort_by(Integer)"
});
formatter.result({
  "duration": 3672066127,
  "status": "passed"
});
formatter.after({
  "duration": 25882,
  "status": "passed"
});
formatter.after({
  "duration": 936259624,
  "status": "passed"
});
formatter.before({
  "duration": 2187289678,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search for a product and sort by index nr : \"4\"",
  "description": "",
  "id": "search-product;search-for-a-product-and-sort-by-index-nr-:-\"\u003csortoptionindex\u003e\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@live"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page \"http://emag.ro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a product \"masina tuns\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see respective product in title \"masina tuns\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I sort by \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://emag.ro",
      "offset": 19
    }
  ],
  "location": "ProductSearch.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 3304177378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "masina tuns",
      "offset": 24
    }
  ],
  "location": "ProductSearch.iSearchForProduct(String)"
});
formatter.result({
  "duration": 2545763471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "masina tuns",
      "offset": 35
    }
  ],
  "location": "ProductSearch.iSeeProductInTitle(String)"
});
formatter.result({
  "duration": 2296076180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    }
  ],
  "location": "ProductSearch.i_sort_by(Integer)"
});
formatter.result({
  "duration": 3646445651,
  "status": "passed"
});
formatter.after({
  "duration": 35700,
  "status": "passed"
});
formatter.after({
  "duration": 910449046,
  "status": "passed"
});
});