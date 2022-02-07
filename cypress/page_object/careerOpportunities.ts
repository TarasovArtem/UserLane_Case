/// <reference types="Cypress" />


class CareerOpportunities {

    getCareerOpportunitiesBlock() {
        return cy.get('#jobs-container');
    }

    getJob() {
        return cy.get('.jobs-list > .job > .job-title > .job-item__title');
    }

    getQaItem() {
        return cy.get('a.job-title').eq(3);
    }
}
export default CareerOpportunities