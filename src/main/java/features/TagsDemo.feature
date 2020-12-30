Feature: Verify the scenarios using Tags 

@smoke
Scenario: Verify Login page
When clicking on login page 
Then login page should be opened 

@regression
Scenario: Verify Home page
When clicking on home page 
Then home page should be opened

@smoke
Scenario: Verify Items page
When clicking on items page 
Then items page should be opened

@regression
Scenario: Verify Mobiles page
When clicking on mobiles page 
Then mobiles page should be opened

@endtoend @regression
Scenario: Verify Pantry page
When clicking on pantry page 
Then pantry page should be opened


Scenario: Verify Cart page
When clicking on cart page 
Then cart page should be opened

