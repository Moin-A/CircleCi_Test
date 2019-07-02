
            describe('Visual regression for elements in videos section', () => {
                beforeEach(() => {
                    cy.viewport("macbook-15")
                })
                it('Take the screenshot of entire videos section in prod env', () => {
                cy.visit("/videos") 
                cy.get('#container').matchImageSnapshot('Videos-sectionpage',{coverage: "fullpage"})
                // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="161"]').click()
                // cy.get('#container').matchImageSnapshot('Videos-subsectionpage',{coverage: "fullpage"})
                })
                it('compare the screenshot of the videos section with the one taken in beta env', () => {
                Cypress.currentTest.retries(1)      
                cy.visit(Cypress.env("thequint-beta-hindi")+'/videos')
                cy.get('#container').matchImageSnapshot('Videos-sectionpage',{coverage: "fullpage"})
                // cy.get('li[class="sub-nav-section__contents__list"][data-reactid="161"]').click()
                // cy.get('#container').matchImageSnapshot('Videos-subsectionpage',{coverage: "fullpage"})
                
                })
                })