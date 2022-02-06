/// <reference types="Cypress" />

class Navigation {

    careerPage() {
        return cy.visit('/');
    }

    applyPage() {
        cy.visit('https://jobs.lever.co/userlane/19b969e3-e406-486c-82e6-483f62fe597f')
    }

    getUrlPage() {
        return cy.url();
    }
}
export default Navigation;