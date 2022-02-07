/// <reference types="Cypress" />

import { Navigation, ApplyPage, UserData, URL }  from '../page_object/index';



describe('Visit to opened QA position , and apply for the position', () => {
    
    const navigation = new Navigation();
    const applyPage = new ApplyPage();

    const fixtureFile = 'resume-sample.pdf';

    beforeEach(() => {
        navigation.applyPageForm();
        
    })
    it('Should be applied for the position, and check for a successful response from the backend when the application is submitted', () => {
        
        //applyPage.getApplyForThisJob('Apply for this job').click({ multiple: true });
        applyPage.getAttachResumeBtn().attachFile(fixtureFile);
        applyPage.getFullName().type(UserData.name);
        applyPage.getEmailAddress().type(UserData.email);
        applyPage.getPhone().type(UserData.phone);
        applyPage.getNoticePeriod().type(UserData.notice_period);
        applyPage.getRelocation('No').check();
        applyPage.getSalaryExpectations().type(UserData.salary);
        applyPage.getTechnicalSkills('Yes').check();
        applyPage.getPrivacyPolicyCheckBox().check();
        //applyPage.getCaptcha().check() // To bypass the captcha there are several options (2Captcha, Puppeteer), but I think the best option is to disable it for the test version. 
        //Important: The test is working if you disable the captcha
        cy.intercept('POST','**/apply').as('getApply');   
        applyPage.getSubmitApplication().click();
        cy.wait('@getApply').should(({request, response}) => {
            console.log(request);
            expect(request.body).to.include('email');

            console.log(response);
            expect(response.body).to.have.property('email', 'hello@cypress.io')
        })
        
    })

})