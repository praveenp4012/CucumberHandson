$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Selenium/CucumberHandson/src/main/java/features/tagsDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the scenarios using Tags",
  "description": "",
  "id": "verify-the-scenarios-using-tags",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Home page",
  "description": "",
  "id": "verify-the-scenarios-using-tags;verify-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicking on home page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "home page should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionForTags.clicking_on_home_page()"
});
formatter.result({
  "duration": 247531962,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionForTags.home_page_should_be_opened()"
});
formatter.result({
  "duration": 69696,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Mobiles page",
  "description": "",
  "id": "verify-the-scenarios-using-tags;verify-mobiles-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "clicking on mobiles page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "mobiles page should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionForTags.clicking_on_mobiles_page()"
});
formatter.result({
  "duration": 108191,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionForTags.mobiles_page_should_be_opened()"
});
formatter.result({
  "duration": 79421,
  "status": "passed"
});
});