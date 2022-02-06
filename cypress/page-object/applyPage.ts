/// <reference types="Cypress" />

class ApplyPage {

    getApplyForThisJob() {
        return cy.get('a.postings-btn');
    }
}
export default ApplyPage;