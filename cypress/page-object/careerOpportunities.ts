/// <reference types="Cypress" />


class CareerOpportunities {

    getCareerOpportunitiesBlock() {
        return cy.get('#jobs-container');
    }

    getJob() {
        return cy.get('.jobs-list > .job > .job-title > .job-item__title');
    }
}
export default CareerOpportunities