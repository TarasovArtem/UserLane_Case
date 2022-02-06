/// <reference types="Cypress" />

import { Navigation, ApplyPage, UserData, URL }  from '../page-object/index';



describe('Visit the Userlane career page, check if any QA position is open, and apply for the position', () => {
    
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
        //applyPage.getCaptcha().check()
        cy.intercept({
            method: 'GET',
            url: '**/apply'
        }).as('getApply');
        applyPage.getSubmitApplication().click();
        cy.wait('@getApply').its('response.statusCode').should('eq', 200);
        
    })

})