$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Selenium/CucumberHandson/src/main/java/features/TaggedHooksDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the scenarios using Hooks",
  "description": "",
  "id": "verify-the-scenarios-using-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 323763,
  "status": "passed"
});
formatter.before({
  "duration": 151549,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Login page",
  "description": "",
  "id": "verify-the-scenarios-using-hooks;verify-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "clicking on login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login page should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionForTaggedHooks.clicking_on_login_page()"
});
formatter.result({
  "duration": 263376516,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionForTaggedHooks.login_page_should_be_opened()"
});
formatter.result({
  "duration": 45383,
  "status": "passed"
});
formatter.after({
  "duration": 129668,
  "status": "passed"
});
formatter.after({
  "duration": 130478,
  "status": "passed"
});
formatter.before({
  "duration": 195716,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Home page",
  "description": "",
  "id": "verify-the-scenarios-using-hooks;verify-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Second"
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
  "location": "StepDefinitionForTaggedHooks.clicking_on_home_page()"
});
formatter.result({
  "duration": 59566,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionForTaggedHooks.home_page_should_be_opened()"
});
formatter.result({
  "duration": 66455,
  "status": "passed"
});
formatter.after({
  "duration": 106976,
  "status": "passed"
});
formatter.before({
  "duration": 201795,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Items page",
  "description": "",
  "id": "verify-the-scenarios-using-hooks;verify-items-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "clicking on items page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "items page should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionForTaggedHooks.clicking_on_items_page()"
});
formatter.result({
  "duration": 67670,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionForTaggedHooks.items_page_should_be_opened()"
});
formatter.result({
  "duration": 63213,
  "status": "passed"
});
formatter.after({
  "duration": 93603,
  "status": "passed"
});
});