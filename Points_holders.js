export class Points_holders{
    table(){
        //manage org click
        cy.get('.manage-club-menu-item > a > div').click()
        cy.get('.org-title').click()
        cy.get('#simple-tab-3 > .MuiTab-wrapper').click() //tab switching
        cy.get('*[class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-stickyHeader"]').contains('th','Point Holders').should('be.visible').wait(1000)
        cy.get('*[class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-stickyHeader"]').contains('th','Email Id').should('be.visible').wait(1000)
        cy.get('*[class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-stickyHeader"]').contains('th','Wallet ID').should('be.visible').wait(1000)
        cy.get('*[class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-stickyHeader"]').contains('th','Points').should('be.visible').wait(1000)
        cy.get('*[class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-stickyHeader"]').contains('th','Member Since').should('be.visible').wait(1000)
        
    }
}