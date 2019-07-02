describe('Visual regression for elements in news section', () => {
    beforeEach(() => {
        cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire news section in prod env', () => {
    cy.visit("/news") 
    cy.get('#container').matchImageSnapshot('News-sectionpage',{coverage: "fullpage"})
    // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    // cy.get('#container').matchImageSnapshot('News-subsectionpage',{coverage: "fullpage"})
    })
    it('compare the screenshot of the news section with the one taken in beta env', () => {
    Cypress.currentTest.retries(1)    
    cy.visit(Cypress.env("thequint-beta-hindi")+'/news')
    cy.get('#container').matchImageSnapshot('News-sectionpage',{coverage: "fullpage"})
    // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    // cy.get('#container').matchImageSnapshot('News-subsectionpage',{coverage: "fullpage"})
    })
    })