import { getMaxListeners } from "cluster";
import { AssertionError } from "assert";
import {homepage_beta} from "../../CommonFunctions:pages/Beta_object_model"

const Homepage = new homepage_beta

function* gereratorfunction(){
  yield "https://thequint-beta-fit.quintype.io/heart"
  yield "https://thequint-beta-fit-hindi.quintype.io/heart"
}
let generator = gereratorfunction()


const envvar =["thequint-beta","thequint-beta-hindi"]



describe('e2e test for the quint', () => {
beforeEach(() => {cy.viewport("macbook-15")
})



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
Homepage.Section_link_navigation(Cypress.env(URL)+'videos')
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
let site_url =generator.next().value  
Homepage.fitsite_redirection(Cypress.env(URL),site_url)  
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
envvar.forEach((URL,index) => {
it(`verify that showmore button on collection top story functions properly on ${URL}`, () => { 
Homepage.top_stories_collection(Cypress.env(URL))  
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
it(`Verify that metarags is visible for topic page on ${url}`, () => { 
cy.visit(Cypress.env(url)+"/elections")
cy.get('meta[name="robots"]').should("have.attr", "content")
cy.get('meta[name="viewport"]').should("have.attr", "content")
cy.get('meta[name="format-detection"]').should("have.attr", "content")
cy.get('meta[name="apple-touch-fullscreen"]').should("have.attr", "content")
cy.get('meta[name="csrf-param"]').should("have.attr", "content")
cy.get('meta[name="csrf-param"]').should("have.attr", "content")
cy.get('meta[name="msvalidate.01"]').should("have.attr", "content")
cy.get('meta[name="twitter:widgets:csp"]').should("have.attr", "content")
})
})
})










    

  

