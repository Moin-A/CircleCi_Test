  
  export class homepage_beta   {
   showmore_button=".show-more"      
   englishurl="https://thequint-beta.quintype.io/"      
   number1 =["https://thequint-beta-fit.quintype.io/heart","https://thequint-beta-fit-hindi.quintype.io/heart"]
   Homebutton = ".js-header>h2"
   Header = ".header-section"
   Myreport='.homepage-citizenq'
   HamMenu_icon='.menu-icon'
   HamMenu_Side_Pane='.sidepane-open' 
   Toggle_search_icon='.toggle-search'
   Toggle_search_bar='.toggle-search__dropdown'
   Sidepane_item='.menu-sidepane>nav>ul>li:first-child>a'
   TopCarouselStory= '.banner-container__left>div>div>div>article:nth-of-type(2)>a'
   TopcarousalStory_headline = ".slick-slide:nth-child(2) .top-stories-headline"
   structureddata_items = '[class="mdl-data-table__cell--non-numeric lTBxed-jyrRxf-eEDwDf"]'
   article=":nth-child(2) > .mdl-list__item-primary-content"
   fetch_url_thequint = "https://thequint-web.qtstage.io/anaghs-fifa-replica/how-to-start-meditation-at-home-follow-these-8-simple-steps{enter}" 
   fetch_url_thequint_hindi="https://thequint-hindi-web.qtstage.io/all-sports/httpsenwikipediaorgwikimanikarnika_the_queen_of_jhansi-2{enter}"
   fetch_url_thequint_fithindi="https://thequint-fit-hindi-web.qtstage.io/fit/2019/05/10/how-to-start-meditation-at-home-follow-these-8-simple-steps{enter}"   
   fetch_url_thequint_fit="https://thequint-fit-web.qtstage.io/fit/how-to-start-meditation-at-home-follow-these-8-simple-steps" 
   Video_carousel_thumbnail = ".story-fluid-medium:nth-child(1)"
   Video_section_link=".stay-updated__link"
   search_button =".ico-tq"
   search_toolbar = ".toggle-search__dropdown__input"
   search_panel='#inputSearch'
   LoadMore_button =".load-more__button"
   My_report_button=".libel-suit > svg"
   storypage_container=".header-section__bottom__container"
   

 
    homepage_navigation(url = "")
    {
             cy.visit(url+"elections")
             cy.get(this.Homebutton).click()
             cy.get(this.Header).should("be.visible")
             cy.get(this.Myreport).should("be.visible") 
             cy.url().should('eq',url)

    }
    
    storypage_navigation(url = "")
    {
             cy.visit(url)
             cy.get(this.TopCarouselStory).should('have.attr','href').then((text1) => {
             cy.get(this.TopcarousalStory_headline).click({timeout:600000})
             
             cy.url().then((text2) => {
             expect(text2).to.contain(text1)})})
    
    }
    Header_Functionality(url = "")
    {         cy.visit(url)
              cy.get(this.Toggle_search_icon).click()
              cy.get(this.Toggle_search_bar).should('be.visible')
              cy.get(this.HamMenu_icon).click()
              cy.wait(1000)
              cy.get(this.HamMenu_Side_Pane).should('be.visible')
    }
    
    SectionPage_Navigation(url="")
    {
              cy.visit(url)
              cy.get(this.HamMenu_icon).click()
              cy.get(this.Sidepane_item).should('have.attr','href').then((href) => {
              cy.get(this.Sidepane_item).click()
              cy.url().then((h2ref) => {
              expect(h2ref).to.contain(href)
              })  
              })
      
    }
    Section_link_navigation(url="")
    {
              cy.visit(url)
              cy.get(this.Video_carousel_thumbnail).click()
              cy.get(this.Video_section_link).should('have.attr','href').then((href) =>
              {cy.get(this.Video_section_link).click()
              cy.url().then((h2ref) => {
              var spli=h2ref.split('/')
              expect('/'+spli[3]+'/'+spli[4]).to.contain(href)
           })  
         })
        }

    Search_Functionality(url="")  
    { 
             cy.visit(url)
             cy.get(this.search_button).click()
             cy.get(this.search_toolbar).type('story{enter}')
             cy.get(this.search_panel).should('have.attr','value').then((href) => {expect(href).to.equal('story')})
             cy.get('.search-section__result-found').should('be.visible')
             cy.get(' .search-section__pagination--showing-item').should('be.visible')
   
    
    }
    LoadMore_button_Functionality(url="")
    {
             cy.visit(url)
             cy.get('.hot-news-section').should('have.length', 2)
             cy.get(this.LoadMore_button).click().wait(3000)
             cy.get('.hot-news-section').should('have.length', 3)
     }
    
    Myreport_Homepage_widget(url="") 
    {
             cy.visit(url) 
             cy.get(this.My_report_button).click()
             cy.url().then((a) => {
             expect(a).to.be.equal(url+"my-report")
    })
    }
    UGC_navigation(url="")
    {
             cy.visit(url) 
             cy.get('div[class="homepage-citizenq__icons"]>span:nth-of-type(1)').click()
             cy.wait(2000)
             cy.url().then((a) => {
             expect(a).be.equal(url+"your-story")
    })
    } 
    Live_blog_rendering(url=""){
            if(url==this.englishurl) {
            cy.visit(url+"news/india/maratha-quota-stir-maharashtra-bandh-9-august")  
            cy.get('.btn__sortable:nth-child(1)').invoke('text').should('eq','NEWEST FIRST')
            cy.get('.btn__sortable:nth-child(2)').invoke('text').should('eq','OLDEST FIRST')
            cy.get('div:nth-child(1) > section .liveblog__body-top > .story-article__body').should('be.visible')
        }
        else{
            cy.visit(url+"news/india/weather-forecast-cyclone-vayu-gujarat-maharashtra-high-alert-ndrf-imd-live-update")
            cy.get('.btn__sortable:nth-child(1)').invoke('text').should('eq','NEWEST FIRST')
            cy.get('.btn__sortable:nth-child(2)').invoke('text').should('eq','OLDEST FIRST')
            cy.get('div:nth-child(1) > section .liveblog__body-top > .story-article__body').should('be.visible')
        }}
           
    
    
    Explainer_story_rendering(url=""){
           cy.visit(url+"/explainers")
           cy.get(".section-fluid:nth-child(2) .story-medium-deqoded .img-wrap").click()
           cy.get('div[class="story-article__hero__image__caption container"]').should('be.visible')
           cy.get('div[class="story-header__left-lead--content merriweather-reg"]').should('be.visible')
    }
  
  
    top_stories_collection(url=""){
           cy.visit(url+"entertainment")
           cy.get(this.showmore_button).click()
           if(url=="https://thequint-beta.quintype.io/"){
           cy.url().should('eq',`${url}collection/top-stories-entertainment`)}
           else{
           cy.url().should('eq',`${url}collection/top-story-entertainment`)       
           }
           cy.get('.load-more__button').click().then((a)=>{

           })
    }
    fitsite_redirection(url="",site_url){
           cy.visit(url+"fit/heart")
           cy.url().then((a) => {  
           expect(a).to.be.equal(site_url)
    }) 
    }
    MultipleSite_render_verification(url=""){
            cy.visit(url)
            cy.get(".section-fluid-top").should('be.visible')
      }
    }

