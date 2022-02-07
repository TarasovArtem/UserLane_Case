#### Description

##### Test 1: 

    Visit the Userlane career page, check if any QA position is open


##### Test 2: 

    Visit to opened QA position, and apply for the position


### Commands for running tests and files structure

#### Installation

    git clone https://github.com/TarasovArtem/UserLane_Case.git

    cd UserLane_Case

    npm install


#### Opening Cypress GUI

    npx cypress open 

or 

    npm run cypress:open

#### Running Cypress test in terminal

    npm run chrome
    npm run firefox
    npm run edge


#### Test files structure

    ./cypress/integration/application_process.spec.ts
    ./cypress/integration/userLaneCase.spec.ts


#### Project Object files structure

    ./cypress/page_object/index.ts
    ./cypress/page_object/nameList.ts
    ./cypress/page_object/navigation.ts
    ./cypress/page_object/applyPage.ts
    ./cypress/page_object/careerOpportunities.ts
    ./cypress/page_object/careerPage.ts