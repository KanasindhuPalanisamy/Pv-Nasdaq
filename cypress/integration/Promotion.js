export class Promotion{
    create_promo(){
       cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root').click()
        cy.get('.active-org > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title').click()
        cy.get('#simple-tab-1 > .MuiTab-wrapper').click()
        // cy.get('.table-head-section > .MuiGrid-root > .btn').click()
/*
        //promotion type
        cy.get('#mui-component-select-promoType').click({force:true},{timeout:2000})
        cy.get('[data-value="Email"]').click()
        //sponsor
        cy.get('#mui-component-select-sponsorId').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        //code prefix 
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('hai')
        //points
        cy.get('#mui-component-select-promoCodePoints').click()*/
        //Check ADD promotion/Hunt
cy.get('.table-head-section > .MuiGrid-root > .btn')
.contains('Add Promotion / Hunt')
.click()
cy.get('.MuiDialogContent-root.pad0')
cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12")
.find('#form-dialog-title')
.contains('CREATE')
.contains('Promotions')
.wait(2000)
// //Form in create promotion
// cy.get(':nth-child(1) > .input-group > .input-label')
// .contains('Promotion Type')
// // cy.get('#mui-component-select-promoType')
// cy.get(':nth-child(3) > .input-group > .input-label')
// .contains('Code Prefix')
// cy.get(':nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
// .type('55EEB')
// .should('be.visible')
// .wait(2000)
// cy.get(':nth-child(5) > .input-group > .input-label')
// .contains('No.of')
// .contains('Promocodes')
// .type('2')
// // .wait(2000)
//cy.get('.MuiInputBase-root.MuiInput-root.MuiInput-underline.custom-select.form-select.undefined')
//.find('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input')

//cancel


cy.get('#mui-component-select-promoType').click({force:true})
cy.get('[data-value="Email"]').click()
cy.get('#mui-component-select-sponsorId').click()
cy.get('.MuiList-root > [tabindex="-1"]').click()
//cy.get('[data-img="https://pv-pirates-images-alpha.s3-us-west-2.amazonaws.com/photos/sponsor0.3032329300356642.png"]').click()
cy.get('#mui-component-select-promoCodePoints').click()
cy.get('[data-value="400"]').click()
// cy.get(':nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
cy.get('.MuiGrid-spacing-xs-3 > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('EEB')
// cy.get('#mui-component-select-promoCodePoints')
// .should('have.value', 400)
cy.get('#mui-component-select-validityDay').click()
cy.get('[data-value="5"]').click()
cy.get('.promo-dynfield-container')
.contains('Email info')
cy.get('[data-value="5"]').click()
cy.get('.promo-dynfield-container')
.contains('Email info')
cy.get(':nth-child(2) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('pirates@gmail.com')
cy.get('.info-section > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.clear()
cy.get('.info-section > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')

.type('First Promotion')
cy.get('[rows="3"]')
.clear()
cy.get('[rows="3"]')
.type('Message goes here!!')

//Promotion Preview
cy.get('.form-grid > .MuiGrid-item.MuiGrid-grid-xs-12')
// cy.get('.MuiGrid-grid-sm-9 > .section-heading').contains('First Prom')
cy.get('.section-heading.sub-heading.email-title').should('have.text','First Promotion')
cy.get('.message-preview').should('have.text', 'Message goes here!!')
cy.get('.promocode-preview').should('have.text', 'EEB400')
cy.get('.promo-code-sec > .update-date-txt').should('have.text', 'Valid till 20 Jun 2021')
// cy.get().click()

cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-text.btn.btn-primary.button.MuiButton-textPrimary')
.find('.MuiButton-label').click()

        // cy.get('#mui-component-select-promoType').type('App Notification').click({force:true})
        // cy.get('').contains('Email')
        
    }

    create_merch()
    {
        cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{timeout:10000}).click()
        cy.get('.active-org > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title').click()
        cy.get('#simple-tab-2> .MuiTab-wrapper').click()
        cy.get('.btn-highlight').click() //click add merchandise
        cy.get('.MuiDialog-container > .MuiPaper-root')
        .contains('New Merchandise')
        cy.get('.form-fields.form-field-file.cust-file-type')
        .attachFile('Nasdaq.png');
        cy.get('#mui-component-select-category')
        .click()
        cy.get('[data-value="Merch"]')
        .click()
        .should('have.text','Merch')
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('Nasdaq')
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('500')
        cy.get('.merch-listing-box')
        cy.get(':nth-child(1) > .input-group > .merch-cust-capacity')
        .type('Baseball')
        cy.get('.merch-cap-list-card > :nth-child(2) > .input-group')
        .type('brown')
        cy.get(':nth-child(3) > .input-group > .merch-cust-capacity')
        .type('5')
        cy.get(':nth-child(4) > .input-group > .merch-cust-capacity')
        .type('10')
        cy.get('.add-merch-list')
        .click()
        .wait(5000)
        cy.get(':nth-child(2) > :nth-child(2) > .input-group > .merch-cust-capacity')
        .type('glove')
        cy.get(':nth-child(2) > :nth-child(3) > .input-group > .merch-cust-capacity')
        .type('Blue')
        cy.get(':nth-child(2) > :nth-child(4) > .input-group > .merch-cust-capacity')
        .type('10')
        cy.get(':nth-child(1) > :nth-child(2) > .input-label').click().wait(3000)
        cy.get('[rows="3"]').type('Tested Review written for about 3 lines')
        cy.get('#mui-component-select-emailVoucher').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
        cy.get('#mui-component-select-merFulfillment').click()
        cy.get('.MuiList-root > [tabindex="-1"]').click()
//Submit button
//cy.get('.MuiDialogActions-root > .btn-primary').click()
    }

create_hunt(){
    cy.get('.overview-wrapper > :nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root').click()
    cy.get('.active-org > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title').click()
    cy.get('#simple-tab-1 > .MuiTab-wrapper').click()
    cy.get('.table-head-section > .MuiGrid-root > .btn')
.contains('Add Promotion / Hunt')
.click()
cy.get('.MuiDialogContent-root.pad0')
cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12")
.find('#form-dialog-title')
.contains('CREATE')
.contains('Promotions')
.wait(2000)
//select hunt
cy.get(':nth-child(1) > .input-group > .input-label').contains('Promotion Type')
cy.get('#mui-component-select-promoType').click()
cy.get('[data-value="Hunt"]').click()
//select sponsor
cy.get('.MuiGrid-spacing-xs-3 > :nth-child(2) > .input-group > .input-label').contains('Sponsor')
cy.get('#mui-component-select-sponsorId').click()
cy.get('.MuiList-root > [tabindex="-1"]').click()
//code prefix
cy.get('.MuiGrid-spacing-xs-3 > :nth-child(3) > .input-group > .input-label').contains('Code Prefix')
cy.get(':nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('KSH')
//points
cy.get(':nth-child(4) > .input-group > .input-label').contains('Points per Hunt')
cy.get('#mui-component-select-promoCodePoints').click()
cy.get('[data-value="400"]').click()
//No.of.points per user
cy.get(':nth-child(5) > .input-group > .input-label').contains('No.of Points per user')
cy.get(':nth-child(5) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type('33')
//validity
cy.get(':nth-child(6) > .input-group > .input-label').contains('Validity')
cy.get('#mui-component-select-validityDay').click()
cy.get('[data-value="2"]').click()

//select location
// should('be.visible')
    cy.get('.css-1hwfws3').click().focused().type('Coimbatore,Tamil Nadu,India',{delay:700}).should('have.length.gte', 1).type('{enter}')
}

}




