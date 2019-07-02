describe('Visual regression for elements in Authorpage section', () => {
    beforeEach(() => {
        cy.viewport('iphone-6+')
    })
    it('Take the screenshot of entire Authorpage section in prod env', () => {
    cy.visit("author/560003/")
    cy.get('#container > div > div:nth-child(4)').matchImageSnapshot('author',{coverage: "fullpage"})
    })
    it('compare the screenshot of the Authorpage section with the one taken in beta env', () => {
    Cypress.currentTest.retries(1)    
    cy.visit(Cypress.env("thequint-beta-hindi")+'author/560003/')
    cy.get('#container > div > div:nth-child(4)').matchImageSnapshot('author',{coverage: "fullpage"})
    })
    })