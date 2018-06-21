$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
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
  "duration": 7605736191,
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
  "duration": 7199926566,
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
  "duration": 8547137,
  "status": "passed"
});
});