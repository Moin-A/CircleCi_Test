
            describe('Visual regression for elements in election section', () => {
                beforeEach(() => {
                    cy.viewport("macbook-15")
                })
                it('Take the screenshot of entire Elections section in prod env', () => {
                cy.visit("/elections") 
                cy.get('#container').matchImageSnapshot('Elections-sectionpage',{coverage: "fullpage"})
                // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
                // cy.get('#container').matchImageSnapshot('election-subsection-page',{coverage: "fullpage"})
                })
                it('compare the screenshot of the Electiond section with the one taken in beta env', () => {
                Cypress.currentTest.retries(1)    
                cy.visit(Cypress.env("thequint-beta-hindi")+'/elections')
                cy.get('#container').matchImageSnapshot('Elections-sectionpage',{coverage: "fullpage"})
                // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
                // cy.get('#container').matchImageSnapshot('election-subsection-page',{coverage: "fullpage"})
                })
                })
                

    
                
  

