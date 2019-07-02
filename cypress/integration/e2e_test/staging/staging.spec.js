import { getMaxListeners } from "cluster";
import { AssertionError } from "assert";
import {homepage_beta} from "../../CommonFunctions:pages/Beta_object_model"

const Homepage = new homepage_beta
Homepage.Homebutton=".navbar-logo"
Homepage.Header=".sub-nav-section__contents"
Homepage.My_report=".collection-title:nth-child(1)"
Homepage.HamMenu_icon=".hamburger-bar2 > div"
Homepage.HamMenu_Side_Pane=".hamburger-menu-desktop__menu-left"
Homepage.Toggle_search_icon=".search-desktop-icon"
Homepage.Toggle_search_bar=".search-input"
Homepage.Sidepane_item=".sub-nav-section__contents__list:nth-child(2) > a"
Homepage.TopCarouselStory=".slick-slide:nth-child(4) >div>div>article>a"
Homepage.Video_carousel_thumbnail=".slick-current .video-carousel__story > a img"
Homepage.Video_section_link=".stay-updated:nth-child(9) > .stay-updated__link"
Homepage.search_button
Homepage.search_toolbar
Homepage.search_panel
Homepage.LoadMore_button
Homepage.My_report_button
Homepage.TopcarousalStory_headline=".slick-slide:nth-child(4) .top-stories-article img"
Homepage.storypage_container=".story-article:nth-child(1)"

Homepage.SectionPage_Navigation=function(url="")
    {
              cy.visit(url)
              cy.get(this.Sidepane_item).should('have.attr','href').then((href) => {
              cy.get(this.Sidepane_item).click()
              cy.url().then((h2ref) => {
              expect(h2ref).to.contain(href)
              })  
              })
    }          




const envvar =["thequint-web","thequint-hindi-web"]


describe('e2e test for the quint', () => {
beforeEach(() => {cy.viewport("macbook-15")})



envvar.forEach((URL) => {
it(`Verify user should get redirected to home page on clicking publisher logo on ${URL}`, () => {
Homepage.homepage_navigation(Cypress.env(URL))
})
})
envvar.forEach((URL) => {
it(`Verify whether a story page opens on clicking on title or image or headline of the story on ${URL}`,() => {
Homepage.storypage_navigation(Cypress.env(URL))
})
})
envvar.forEach((URL) => {
it(`Verify following Header items should open one at one click  on  ${URL}`,() => {
Homepage.Header_Functionality(Cypress.env(URL)) 
})
})
    
envvar.forEach((URL) => { 
it(`Section page open when user clicks one of the menus in hamburger menu list on ${URL}`,() => {
Homepage.SectionPage_Navigation(Cypress.env(URL))
})
})
envvar.forEach((URL) => {    
it(`Verify whether the particular section page opens on clicking on the sectionpage -link at the end of storypage on ${URL}`,() => {
Homepage.Section_link_navigation(Cypress.env(URL))
})
})
envvar.forEach((URL,index) => {
it(`Verify that the loadMore button loads a set of stories in \hot-news section ${URL}` ,() => {
Homepage.LoadMore_button_Functionality(Cypress.env(URL)+'/hot-news')
})
})
envvar.forEach((URL) => {  
it(`Verify whether the search functionality works ${URL}`,() => {
Homepage.Search_Functionality(Cypress.env(URL)  )
})
})

    



  envvar.forEach((URL,index) => {
    it(`Verify user should get redirected to fit for fit section stories on ${URL}`, () => {  
    cy.visit(url+"fit/heart")
    cy.url().then((a) => {  
    expect(a).to.be.equal(this.number1[i])
    }) 
    })
    })
  envvar.forEach((URL) => {
    it(`Verify that my-report section opens on clicking my-report icon on ${URL}`, () => {  
    Homepage.Myreport_Homepage_widget(Cypress.env(URL))
    })
    })
  envvar.forEach((URL,index) => {
    it(`Verify that user is directed to UGC form on the clicking the UGC my report icon on ${URL}`, () => {  
    Homepage.UGC_navigation(Cypress.env(URL))
    })
    })
  envvar.forEach((URL,index) => {
    it(`Verify that Liveblog section is visible on ${URL}`, () => {  
    Homepage.Live_blog_rendering(Cypress.env(URL))
    })
    })
    
   
envvar.forEach((URL,index) => {
    it(`Verify that Explainer section is visible on ${URL}`, () => { 
    Homepage.Explainer_story_rendering(Cypress.env(URL))  
    })
    })
envvar.forEach((url,index) => {
  it(`verify that showmore button on collectio top story functions properly on ${url}`, () => { 
   cy.visit(Cypress.env(url)+"topic/explainer")
   cy.get("figure[data-reactid="+dreactid[index+4]+"]").click()
   cy.get('div[class="story-article__hero__image__caption container"]').should('be.visible')
   cy.get('div[class="story-header__left-lead--content merriweather-reg"]').should('be.visible')
  })
})

envvar.forEach((url,index) => {
    it(`Verify that metagas visible on homepage of ${url}`, () => { 
     cy.visit(Cypress.env(url))
     cy.get('meta[name="description"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:title"]')    
     .should("have.attr", "content")
     cy.get('meta[property= "og:description"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:type"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:url"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:image:width"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:image:height"]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:title"]')
     .should("have.attr", "content")
      cy.get('meta[name= "twitter:description"]')
     .should("have.attr", "content")
     cy.get('meta[name= "msvalidate.01"]')
     .should("have.attr", "content")
     cy.get('meta[property= "fb:app_id"]')
     .should("have.attr", "content")
     cy.get('meta[name= "alternate:0:href"]')
     .should("have.attr", "content")
     cy.get('meta[name= "alternate:0:title"]')
     .should("have.attr", "content")
     cy.get('meta[name="viewport"]')
     .should("have.attr", "content")
     cy.get('meta[name="mobile-web-app-capable"]')
     .should("have.attr", "content")
     cy.get('meta[name="format-detection"]')
     .should("have.attr", "content")
     cy.get('meta[name="HandheldFriendly"]')
    .should("have.attr", "content")
    cy.get('meta[name="csrf-param"]')
    .should("have.attr", "content")
    cy.get('meta[name="csrf-token"]')
    .should("have.attr", "content")
    cy.get('meta[property="og:site_name"]')
    .should("have.attr", "content")
    cy.get('meta[name="msvalidate.01"]')
    .should("have.attr", "content")
    cy.get('meta[name="al:android:app_name"]')
    .should("have.attr", "content")


     
     

    })
})
envvar.forEach((url,index) => {
     it(`all metatags visible on storypages on ${url}`, () => { 
     cy.visit(Cypress.env(url))
     cy.get('div#container > div > div:nth-of-type(3) > div > section > div > div > div > div > div > article:nth-of-type(2) > a > h3').click({timeout:600000})
     cy.get('meta[name="description"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:title"]')    
     .should("have.attr", "content")
     cy.get('meta[property= "og:description"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:type"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:url"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:image:width"]')
     .should("have.attr", "content")
     cy.get('meta[name= "al:android:package"]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:title"]')
     .should("have.attr", "content")
     cy.get('meta[name= "al:android:app_name"]')
     .should("have.attr", "content")
     cy.get('meta[name= "al:android:url"]')
     .should("have.attr", "content")
     cy.get('meta[name= "news_keywords"]')
     .should("have.attr", "content")
     cy.get('meta[name= "keywords"]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:description"]')
     .should("have.attr", "content")
     cy.get('meta[name= "msvalidate.01"]')
     .should("have.attr", "content")
     cy.get('meta[property= "fb:app_id"]')
     .should("have.attr", "content")
     cy.get('meta[name="viewport"]')
     .should("have.attr", "content")
     cy.get('meta[name="mobile-web-app-capable"]')
    .should("have.attr", "content")
    cy.get('meta[name="format-detection"]')
    .should("have.attr", "content")
    cy.get('meta[name="HandheldFriendly"]')
    .should("have.attr", "content")
    cy.get('meta[name="csrf-param"]')
    .should("have.attr", "content")
    cy.get('meta[name="csrf-token"]')
    .should("have.attr", "content")
    cy.get('meta[property="og:site_name"]')
    .should("have.attr", "content")
    cy.get('meta[name="msvalidate.01"]')
    .should("have.attr", "content")
    cy.get('meta[name="al:android:app_name"]')
    .should("have.attr", "content")


     
     

    })
})
envvar.forEach((url,index) => {
    it(`Verify that metatags are visible for topic page on ${url}`, () => { 
     cy.visit(Cypress.env(url)+"/topic/sports")
     cy.get('meta[name="description"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:title"]')    
     .should("have.attr", "content")
     cy.get('meta[property= "og:description"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:type"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:url"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:image:width"]')
     .should("have.attr", "content")
     cy.get('meta[property= "og:image:height"]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:title"]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:card"]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:site"]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:image:src]')
     .should("have.attr", "content")
     cy.get('meta[name= "twitter:description"]')
     .should("have.attr", "content")
     cy.get('meta[name= "msvalidate.01"]')
     .should("have.attr", "content")
     cy.get('meta[property= "fb:app_id"]')
     .should("have.attr", "content")
     cy.get('meta[name= "alternate:0:href"]')
     .should("have.attr", "content")
     cy.get('meta[name= "alternate:0:type"]')
     .should("have.attr", "content")
     cy.get('meta[name= "alternate:0:title"]')
     .should("have.attr", "content")
     cy.get('meta[name="viewport"]')
     .should("have.attr", "content")
     cy.get('meta[name="mobile-web-app-capable"]')
     .should("have.attr", "content")
     cy.get('meta[name="format-detection"]')
     .should("have.attr", "content")
     cy.get('meta[name="HandheldFriendly"]')
     .should("have.attr", "content")
     cy.get('meta[name="csrf-param"]')
     .should("have.attr", "content")
     cy.get('meta[name="csrf-token"]')
     .should("have.attr", "content")
     cy.get('meta[property="og:site_name"]')
     .should("have.attr", "content")
     cy.get('meta[name="msvalidate.01"]')
     .should("have.attr", "content")
     cy.get('meta[name="al:android:app_name"]')
     .should("have.attr", "content")


     
     

})
})
    envvar.forEach((url,index) => {
    it(`Verify that metarags is visible for topic page on ${url}`, () => { 
    cy.visit(Cypress.env(url)+"/elections")
    cy.get('meta[name="description"]')
    .should("have.attr", "content")

  


     
     



 })
 })
 })






    

  

