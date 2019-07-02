

describe('Visual regression for elements in videos section', () => {
    beforeEach(() => {
    cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire hindi storypage  in prod env', () => {
    cy.visit("/news/india/iaf-jaguar-pilot-jettisoned-fuel-tanks-after-bird-hit-in-engine-in-ambala") 
    cy.get('.story-template-text').matchImageSnapshot('storypage',{coverage: "fullpage"})
    // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="161"]').click()
    // cy.get('#container').matchImageSnapshot('Videos-subsectionpage',{coverage: "fullpage"})
    })
    it('compare the screenshot of the hindi storypage with the one taken in beta env', () => {
    Cypress.currentTest.retries(1)      
    cy.visit(Cypress.env("thequint-beta-hindi")+'/news/india/iaf-jaguar-pilot-jettisoned-fuel-tanks-after-bird-hit-in-engine-in-ambala')
    cy.get('.story-template-text').matchImageSnapshot('storypage',{coverage: "fullpage"})
    // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="161"]').click()
    // cy.get('#container').matchImageSnapshot('Videos-subsectionpage',{coverage: "fullpage"})
    
    })
    })