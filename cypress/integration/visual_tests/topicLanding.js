
            describe('Visual regression for elements in Live-blog section', () => {
                beforeEach(() => {
                    cy.viewport("macbook-15")
              
            })
            it('Take the screenshot of entire topic landing page in prod env', () => {
            cy.visit('/topic/entertainment') 
            
            cy.get('.section-fluid-top').matchImageSnapshot('topicLandingpage',{coverage:'fullpage'})
            
            //cy.get('section[class="story-article__event"]').matchImageSnapshot('Hot-news',{coverage: 'fullpage'})
            })
            it('compare the screenshot of the topic landing page with the one taken in beta env', () => {
            cy.visit(Cypress.env("thequint-beta-hindi")+'/topic/entertainment')  
            // cy.get('div#container > div > div:nth-of-type(3) > section > div > div > div:nth-of-type(1)').click()      
            cy.get('.section-fluid-top').matchImageSnapshot('topicLandingpage',{coverage:'fullpage'})
            //cy.get('div[class="story-article__event"]').matchImageSnapshot('Hot-news2',{coverage:'fullpage'})
            //cy.get('div[class="liveblog__body-top"]').matchImageSnapshot('Hot-news3',{coverage:'fullpage'})
            })
            })      
              
    




    
                
  

