describe('Visual regression for elements in webqoof section', () => {
    beforeEach(() => {
        cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire webqoof section in prod env', () => {
    cy.visit("/explainers")
    cy.get('#container').matchImageSnapshot('Explainers',{coverage: "fullpage"})
    })
    it('compare the screenshot of the webqoof section with the one taken in beta env', () => {
    Cypress.currentTest.retries(1)    
    cy.visit(Cypress.env("thequint-beta-hindi")+'/explainers')
    cy.get('#container').matchImageSnapshot('Explainers',{coverage: "fullpage"})
    })
    })