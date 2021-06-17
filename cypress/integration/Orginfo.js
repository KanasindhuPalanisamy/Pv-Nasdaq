export class Orginfo{
events(){
    // cy.get('.top-section > .MuiGrid-root > .MuiButtonBase-root').click()


    // cy.get('.overview-wrapper > :nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root').click()
    // cy.get('.active-org > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title').click()
    // cy.get('#simple-tab-4').contains('Org Info').click()


        cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{ timeout: 20000 })
        .wait(5000)
        .click() //org-overview
        cy.contains("MANAGE ORGANIZATIONS")
        .should('have.class',"page-title")
        //Click the Nasdaq title
        //cy.get('.org-title')
        cy.get('.active-org > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title')
        .click()
        .wait(2000)
        
        //Check Promotions Tab
        cy.get('#simple-tab-4').click().wait(3000)
        .contains('Org Info')
        
        cy.get('.games-wrapper')
        .contains('Games')
        
        cy.get('.videostreaming-wrapper')
        .contains('Video Streaming')
        
        cy.get('.social-wrapper')
        .contains('Social Network Handles')
        cy.get('#social-tab-1')
        .click()
        .wait(5000)
        
        cy.get('#social-tab-0')
        .click()
        .wait(3000)
        
        cy.get(':nth-child(3) > .MuiGrid-root > .MuiPaper-root')
        .contains('News')
        
        cy.get('.MuiGrid-grid-sm-6 > .MuiGrid-item > :nth-child(2)')
        .contains('Nasdaq Players')
        }
        
    


}




// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })