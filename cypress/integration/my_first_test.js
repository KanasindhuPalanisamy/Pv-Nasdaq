/// <reference types="cypress"/>

// it('pv test',function(){
//     cy.visit("https://google.com");
//     cy.get('.gLFyf',{timeout:6000}).type('Automation Step by Step{enter}')
//     // cy.get(':nth-child(3) > :nth-child(1) > .usJj9c > .r > .l').click()
//     // cy.get('.signin-logo-img');
//     // // cy.get('amplify-sign-in.hydrated').find('#username').type("admin_pirates@pointsville.com")
//     // //cy.get('amplify-sign-in.hydrated').find("#password").type("Password@123")
//     // cy.get('.button').click()
//     })


// describe('Newtours',function(){
//     it('verify the newtourdemo',function(){
//         cy.visit("http://demo.guru99.com/test/newtours/") //visit url
//         cy.url().should('include','newtours')  //verify if newtour is present
//         cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("sindhu")
//         cy.get('input[name=password]').should('be.visible').should('be.enabled').type("sindhu")
//         cy.get('input[name=submit]').should('be.visible').click()  //sign-in
//         cy.get(':nth-child(2) > [width="80"] > a').click()

//         //radio
//         cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
//         cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

//         cy.get('[name=findFlights]').should('be.visible').click()
//     })
// })


export class MainPage{
    navigate(){
          cy.visit('https://alpha-sponsors.pointsville.com/');
          cy.get('amplify-authenticator')
            .shadow()
            .get('amplify-sign-in')
            .shadow()
            .find('amplify-form-section')
            .find('amplify-auth-fields')
            .shadow()
            .as('amplifyAuthFields');
      
            cy.get('amplify-authenticator')
            .shadow()
            .get('amplify-sign-in')
            .shadow()
            .find('amplify-form-section')
            .find('amplify-button')
            .shadow()
            .as('amplifyButton');
      
      
          cy.get('@amplifyAuthFields')
            .find('amplify-username-field')
            .shadow()
            .find('amplify-form-field')
            .shadow()
            .find('input#username')
            .type('admin@pointsville.com');
      
          cy.get('@amplifyAuthFields')
            .find('amplify-password-field')
            .shadow()
            .find('amplify-form-field')
            .shadow()
            .find('input#password')
            .type('Password@123');
      
          cy.get('@amplifyButton')
            .find('button')
            .click({force: true})
            .wait(7000);
    }

    sidebar(){
      //chech the side bar navigation with the correct page
      cy.get('.logo')     //logo
      
      //First Icon contians DASHBOARD page
      cy.get('.active > div')
        .click()
        .wait(2000)
      cy.get('.ptv-main')
      cy.get('.details-page')
        .contains('DashBoard',{ timeout: 5000 })
        .wait(2000)
     
       //Second Icon contains the MANAGE ORGANIZATIONS page
      cy.get('.manage-club-menu-item > a > div')
        .click()
      cy.get('.detail-page')
        .contains('MANAGE ORGANIZATIONS')
        .wait(2000)

      //Third Icon contains the MANAGE MEMBERS page  
      cy.get('.manage-member-menu-item > a > div')
        .click()
      cy.get('.ptv-main')
       .contains('MANAGE MEMBERS')
       .wait(2000)
      
      ////Fourth Icon contains the TTRANSACTIONS page
      cy.get('.refresh-menu-item > a > div')
      .click()
      cy.get('.list-page').contains("TRANSACTIONS")
      .wait(2000)
      
  }

  DashboardGrid(){
      //Back to Dashboard page
      cy.get('.active > div')
        .click()
        .wait(2000)

      //check MANAGE ORG grid
      cy.get('.overview-wrapper > :nth-child(1) > .MuiPaper-root')
        .contains('ORG OVERVIEW')
      //   .find('.MuiButton-label')
      //   .contains('MANAGE')
      
      //check points grid
      cy.get(':nth-child(1) > :nth-child(2) > .padd-10')
        .contains("ORG POINTS OVERVIEW")

      //checkpromotion grid
      cy.get(':nth-child(3) > .padd-10')
        .contains('PROMOTIONS OVERVIEW')
      
      //check transaction grid
      cy.get('.MuiGrid-grid-sm-7 > .padd-10')
        .contains('TRANSACTIONS OVERVIEW')
  }

  routepaths(){
    //TO check the froward and bavk arrow to navigate to pages
  // DASHBOARD PAGE
    cy.get('.ptv-main')
    cy.get('.details-page')
      .contains('DashBoard',{ timeout: 5000 })
      .wait(2000)
    //Manage button go to MANAGE ORGANISATION PAGE
      cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root')
        .contains('Manage')
        .click()
        .wait(3000)

    //CLUB DETAILS PAGE
    cy.get('.org-title')
      .contains("NASDAQ")
      .click()
      .wait(3000)
    // MANAGE ORGANISATION PAGE
    cy.go('back').wait(2000)
    cy.get('.detail-page')
      .contains('MANAGE ORGANIZATIONS')
      .wait(2000)
    ///DASHBOARD PAGE
    cy.go('back').wait(2000)
    cy.get('.details-page')
      .wait(2000)
      .contains('DashBoard',{ timeout: 5000 })

    cy.go('forward')
      .wait(2000)




  }
}





    
      