export class Login {
    login()
    {
        cy.visit('https://alpha-sponsors.pointsville.com/')
cy.get(".signin-logo-img").wait(2000)
cy.get('.form-block').find('.title-block')
.should('have.text','SIGN IN').wait(3000)
cy.get('.footer-block > a').should('have.text','SIGN UP NOW')
.click()
.wait(2000)
cy.get('.form-block').find('.title-block')
.should('have.text','SIGN UP').wait(3000)
cy.get('.default-file-type')
.attachFile('Nasdaq.png');
//name
cy.get('.pt-20 > :nth-child(1) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('Testname')
cy.get('.pt-20 > :nth-child(2) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('kapep65906@greenkic.com')
cy.get(':nth-child(3) > :nth-child(1) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('Pass@123')
cy.get(':nth-child(3) > :nth-child(2) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('Pass@123')
cy.get(':nth-child(4) > :nth-child(1) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('Test')
cy.get('#mui-component-select-businessType').click()
cy.get('[data-value="sports"]').click()
cy.get('.pb-10 > .MuiGrid-root > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
.type('London')
cy.get('.MuiButton-label').click()
cy.get('.google-recaptcha')
cy.get('[style="width: 304px; height: 78px;"] > div > iframe')


cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click().wait(8000)
cy.get('#rc-anchor-container')
cy.get('.MuiButtonBase-root').click()
    }
}