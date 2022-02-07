/// <reference types="Cypress" />

import { Navigation, CareerOpportunities, CareerPage, ApplyPage, BlockList, JobList, URL }  from '../page_object/index';



describe('Visit the Userlane career page, check if any QA position is open', () => {
    
    const navigation = new Navigation();
    const careerOpportunities = new CareerOpportunities();
    const careerPage = new CareerPage();
    const applyPage = new ApplyPage();

    beforeEach(() => {
        navigation.careerPage();
        
    })

    it('Should be visit the Userlane career page and show careers block', () => {
        navigation.getUrlPage().should('eq', URL.userlane_careers);    
        careerPage.getCareerPage().find(BlockList.Career_Opportunities);
    })

    it('Should be check if any QA position is open', () => {
        careerOpportunities.getJob().should(($jobItems) => {
            expect($jobItems).to.contain(JobList.Customer_Onboarding_Manager);
            expect($jobItems).to.contain(JobList.Customer_Success_Manager);
            expect($jobItems).to.contain(JobList.Solution_Consultant);
            expect($jobItems).to.contain(JobList.Automation_Test_Engineer);
            expect($jobItems).to.contain(JobList.Senior_Fullstack_Engineer);
            expect($jobItems).to.contain(JobList.Demand_Generation_Specialist_Campaign_Manager);
            expect($jobItems).to.contain(JobList.Technical_SEO_Specialist);
            expect($jobItems).to.contain(JobList.VP_of_Marketing);
            expect($jobItems).to.contain(JobList.Head_of_People_Experience_and_Culture);
            expect($jobItems).to.contain(JobList.HR_Generalist_in_Teilzeit);
            expect($jobItems).to.contain(JobList.Office_and_Event_Manager);
            expect($jobItems).to.contain(JobList.Senior_Recruiter);
            expect($jobItems).to.contain(JobList.Product_Marketing_Manager);
            expect($jobItems).to.contain(JobList.Enterprise_Account_Executive);
            expect($jobItems).to.contain(JobList.Sales_Development_Representative);
            expect($jobItems).to.contain(JobList.Sales_Operations_Specialist);
            expect($jobItems).to.contain(JobList.Senior_Sales_Executive);
            expect($jobItems).to.contain(JobList.Senior_Sales_Executive_UK);
            expect($jobItems).to.contain(JobList.Senior_Partner_Manager_Global_System_Integrators);
            expect($jobItems).to.contain(JobList.Senior_Partner_Manager_System_Integrators_Consultin);
            expect($jobItems).to.contain(JobList.Intern_Strategic_Projects);
            expect($jobItems).to.contain(JobList.Strategy_and_Business_Operations_Manager);

        })
        careerOpportunities.getJob().contains(JobList.Automation_Test_Engineer).should('have.text', JobList.Automation_Test_Engineer);
        careerOpportunities.getQaItem().invoke('removeAttr', 'target').click();
        navigation.getUrlPage().should('include', URL.apply_page);
    })
})