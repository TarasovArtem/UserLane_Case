/// <reference types="Cypress" />

import { Navigation, ApplyPage, BlockList, JobList, URL }  from '../page-object/index';



describe('Visit the Userlane career page, check if any QA position is open, and apply for the position', () => {
    
    const navigation = new Navigation();
    const applyPage = new ApplyPage();

    beforeEach(() => {
        navigation.applyPage();
        
    })
    it('Should be applied for the position, and check for a successful response from the backend when the application is submitted', () => {
        applyPage.getApplyForThisJob().click({ multiple: true });
    })

})