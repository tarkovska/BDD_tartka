$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Buy.feature");
formatter.feature({
  "line": 1,
  "name": "Buy",
  "description": "As a user\r\nI want to buy soutage product\r\nSo that I find soutage category and choose from list of products",
  "id": "buy",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search",
  "description": "",
  "id": "buy;search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"http://tartka.com.ua/en/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill in with \"soutage\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am on the \"http://tartka.com.ua/?s\u003dsoutage\u0026post_type\u003dproduct\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on the first product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I put it to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to my cart",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Fill customer\u0027s name \"Ivan\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Fill customer\u0027s surname \"Ivanov\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Fill customer\u0027s email \"ivanov@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Fill customer\u0027s phone \"0504545458\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click terms",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I checkout",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "http://tartka.com.ua/en/",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 7348940410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soutage",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String)"
});
formatter.result({
  "duration": 5071992445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://tartka.com.ua/?s\u003dsoutage\u0026post_type\u003dproduct",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "duration": 9025798,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_click_on_first_product()"
});
formatter.result({
  "duration": 3320617572,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_put_it_to_cart()"
});
formatter.result({
  "duration": 2663852671,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_go_to_cart()"
});
formatter.result({
  "duration": 2443102682,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_proceed_to_checkout()"
});
formatter.result({
  "duration": 2715676716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.fill_customer_name(String)"
});
formatter.result({
  "duration": 333468344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivanov",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.fill_customer_surname(String)"
});
formatter.result({
  "duration": 265622676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivanov@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.fill_customer_email(String)"
});
formatter.result({
  "duration": 275126219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0504545458",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.fill_customer_phone(String)"
});
formatter.result({
  "duration": 271959874,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.click_terms()"
});
formatter.result({
  "duration": 29532527,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_checkout()"
});
formatter.result({
  "duration": 4704007990,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search",
  "description": "As a user\r\nI want to search\r\nSo that I find soutage",
  "id": "search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search",
  "description": "",
  "id": "search;search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"Company home\" page on URL \"http://tartka.com.ua/en/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill in with \"soutage\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am on the \"http://tartka.com.ua/?s\u003dsoutage\u0026post_type\u003dproduct\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "http://tartka.com.ua/en/",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 7869732735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soutage",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_fill_in_with(String)"
});
formatter.result({
  "duration": 6037470025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://tartka.com.ua/?s\u003dsoutage\u0026post_type\u003dproduct",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.i_should_see_the_button(String)"
});
formatter.result({
  "duration": 11954172,
  "status": "passed"
});
});