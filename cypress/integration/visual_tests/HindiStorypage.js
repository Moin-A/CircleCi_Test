

describe('Visual regression for elements in videos section', () => {
    beforeEach(() => {
    cy.viewport("macbook-15")
    })
    it('Take the screenshot of hindistorypage in prod env', () => {
    cy.visit(Cypress.env("hindi.thequint")+"videos/bsp-sp-breakup-mayawati-is-going-solo-cut-threads-from-akhilesh-yadav") 

    cy.get('.video-article > .story-article:nth-child(1)').matchImageSnapshot('storypageHindi',{coverage: "fullpage"})
    // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="161"]').click()
    // cy.get('#container').matchImageSnapshot('Videos-subsectionpage',{coverage: "fullpage"})
    })
    it('compare the screenshot of the hindistorypage with the one taken in beta env', () => {
    Cypress.currentTest.retries(1)      
    cy.visit(Cypress.env('thequint-beta-hindi')+"videos/bsp-sp-breakup-mayawati-is-going-solo-cut-threads-from-akhilesh-yadav")
    cy.get('.video-article > .story-article:nth-child(1)').matchImageSnapshot('storypageHindi',{coverage: "fullpage"})
    // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="161"]').click()
    // cy.get('#container').matchImageSnapshot('Videos-subsectionpage',{coverage: "fullpage"})
    })
    })