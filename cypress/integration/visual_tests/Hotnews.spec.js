
            describe('Visual regression for elements in hotnews section', () => {
              beforeEach(() => {
                cy.viewport("macbook-15")
            
              
              })
              it('Take the screenshot of entire hot-news section in prod env', () => {
        
              cy.visit('/hot-news').debug()
              cy.get("#container").matchImageSnapshot('Hot-news',{coverage: 'fullpage'})
              })
              it('compare the screenshot of the hotnews section with the one taken in beta env', () => {
              Cypress.currentTest.retries(1)    
              cy.visit(Cypress.env("thequint-beta-hindi")+'/hot-news')
              cy.get("#container").matchImageSnapshot('Hot-news',{coverage: 'fullpage'})
              })
              })
    
    




    
 
  

