
describe('Visual regression for elements in big-story section', () => {
    beforeEach(() => {
        cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire Big-story section in prod env', () => {
        cy.visit("/big-story")
        cy.get('#container').matchImageSnapshot('Bigstory-sectionpage', { coverage: "fullpage" })
        // cy.get('li[class="sub-nav-section__contents__list"]:nth-of-type(3)').click()
        // cy.get('#container').matchImageSnapshot('Bigstory-subsection-page', { coverage: "fullpage" })
    })
    it('compare the screenshot of the Big-story section with the one taken in beta env', () => {
        Cypress.currentTest.retries(1)
        cy.visit(Cypress.env("thequint-beta-hindi") + '/big-story')
        cy.get('#container').matchImageSnapshot('Bigstory-sectionpage', { coverage: "fullpage" })
        // cy.get('li[class="sub-nav-section__contents__list"]:nth-of-type(3)').click()
        // cy.get('#container').matchImageSnapshot('Bigstory-subsection-page', { coverage: "fullpage" })
    })
})
