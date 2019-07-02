describe('Visual regression for elements in neon  section', () => {
    beforeEach(() => {
        cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire neon section in prod env', () => {
    cy.visit("https://www.thequint.com/neon") 
    cy.get('#container').matchImageSnapshot('Neon-sectionpage',{coverage: "fullpage"})
    //  cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    //  cy.get('#container').matchImageSnapshot('Neon-subsectionpage',{coverage: "fullpage"})
    })
    it('compare the screenshot of the neon section with the one taken in beta env', () => {
    Cypress.currentTest.retries(1)      
    cy.visit(Cypress.env("thequint-beta")+'/neon')
    cy.get('#container').matchImageSnapshot('Neon-sectionpage',{coverage: "fullpage"})
    //  cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    //  cy.get('#container').matchImageSnapshot('Neon-subsectionpage',{coverage: "fullpage"})
    })
    })