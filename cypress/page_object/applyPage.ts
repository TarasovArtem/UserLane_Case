/// <reference types="Cypress" />

class ApplyPage {

    getApplyForThisJob(name: string) {
        return cy.get('a.postings-btn').contains(name);
    }

    getAttachResumeBtn() {
        return cy.get('[data-qa="input-resume"]');
    }

    getFullName() {
        return cy.get('input[name="name"]');
    }

    getEmailAddress() {
        return cy.get('input[name="email"]');
    }

    getPhone() {
        return cy.get('input[name="phone"]');
    }

    getNoticePeriod() {
        return cy.get('input[name="cards[b6003f01-23c3-4880-bdc9-a553b23948a9][field0]"]');
    }

    getRelocation(name: string) {
        return cy.get('input[name="cards[feb7d9d3-23a6-4c29-9e9f-5d9db2a872f4][field0]"]');
    }

    getSalaryExpectations() {
        return cy.get('input[name="cards[a84c6739-175e-4233-aeee-8806fce30c87][field0]"]')
    }

    getTechnicalSkills(name: string) {
        return cy.get('input[name="cards[12a521d5-15b0-4471-9f02-891fdb44fa31][field0]"]')
    }

    getPrivacyPolicyCheckBox() {
        return cy.get('input[type="checkbox"]');
    }

    /*getCaptcha() {
        return cy.get('#anchor');
    }*/

    getSubmitApplication() {
        return cy.get('[data-qa="btn-submit"]');
    }
}
export default ApplyPage;