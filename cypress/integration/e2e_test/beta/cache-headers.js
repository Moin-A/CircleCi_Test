describe("Cache-headers", () => {
    const urls = [
      "https://thequint-beta.quintype.io/neon",
      "https://thequint-beta.quintype.io/neon/shopaholic-gave-up-clothes-and-wore-only-her-dad-clothes-for-a-week",
      "https://thequint-beta-fit.quintype.io/serviceworker.js",
      "https://thequint-beta-fit.quintype.io/amp-dmp.html?configID=71023",
      "https://thequint-beta-fit.quintype.io/sexolve/love-sex-and-relationships-sexolve-84",
      "https://thequint-beta-fit.quintype.io/favicon.ico",
      "https://thequint-beta-fit.quintype.io/og_thequint.jpg",
      "https://thequint-beta-fit.quintype.io/subscribe",
      "https://thequint-beta-fit.quintype.io/health-news/fit-quiz-yoga-health-benefits",
      "https://thequint-beta-fit.quintype.io/fit-connect",
      "https://thequint-beta-fit.quintype.io//api/v1/bulk/engagement?id1=239f17c5-08c9-4d8f-9d13-1c9fc86aa23d&id2=88fb5d52-dff8-45a7-b59e-ec8a320e72ef&id3=09ec191a-85f5-4d3f-bf22-be5f16c066c8&id4=1d0f12cd-d37f-473a-9fef-209fb3d0f61d&id5=de60be26-1515-4e48-b688-4361b920417c",
      "https://thequint-beta-fit.quintype.io/collection/flex-em",
      "https://thequint-beta-fit.quintype.io/collection/chew-on-this",
      "https://thequint-beta-fit.quintype.io/topic/health",
      "https://thequint-beta-fit.quintype.io/topic/fit-webqoof",
      "https://thequint-beta-fit.quintype.io/topic/cancer",
      "https://thequint-beta.quintype.io/entertainment",
      "https://thequint-beta.quintype.io/entertainment/celebrities",
      "https://thequint-beta.quintype.io/collection/movie-reviews",
      "https://thequint-beta.quintype.io/topic/live-blog",
      "https://thequint-beta.quintype.io/topic/explainers",
      "https://thequint-beta.quintype.io/subscribe",
      "https://thequint-beta.quintype.io/about-us",
      "https://thequint-beta-hindi.quintype.io/videos",
      "https://thequint-beta-hindi.quintype.io/about-us",
      "https://thequint-beta-hindi.quintype.io/collection/sports",
      "https://thequint-beta-hindi.quintype.io/collection/movie-review",
      "https://thequint-beta-hindi.quintype.io/subscribe",
      "https://thequint-beta-hindi.quintype.io/entertainment/bollywood",
      "https://thequint-beta-hindi.quintype.io/entertainment/bollywood/india-vs-pakistan-bollywood-celebrities-tweet-to-congratulate-team-india",
      "https://thequint-beta.quintype.io/news/india/encounter-broke-out-between-militants-and-security-forces-in-srinagar",
      "https://thequint-beta-fit-hindi.quintype.io/",
      "https://thequint-beta-fit-hindi.quintype.io/serviceworker.js",
      "https://thequint-beta-fit-hindi.quintype.io/amp-dmp.html?configID=71023",
      "https://thequint-beta-fit-hindi.quintype.io/favicon.ico",
      "https://thequint-beta-fit-hindi.quintype.io/og_thequint.jpg",
      "https://thequint-beta-fit-hindi.quintype.io/subscribe",
      "https://thequint-beta-fit-hindi.quintype.io/fit-connect",
      "https://thequint-beta-fit-hindi.quintype.io/api/v1/bulk/engagement?id1=239f17c5-08c9-4d8f-9d13-1c9fc86aa23d&id2=88fb5d52-dff8-45a7-b59e-ec8a320e72ef&id3=09ec191a-85f5-4d3f-bf22-be5f16c066c8&id4=1d0f12cd-d37f-473a-9fef-209fb3d0f61d&id5=de60be26-1515-4e48-b688-4361b920417c",
      ];
      urls.forEach(url => {
      let reqHeaders = {};
      reqHeaders["QT-Debug"] = 1;
      let opts = {
      url: url,
      headers: reqHeaders
      };
  
      it("headers for " + url, function() {
          return cy
          .request(opts)
          .its("headers")
          .then(headers => {
           const cacheHeaders = headers["cache-control"];
        
       let name2=cacheHeaders.indexOf("max-age")
       let name3= name2 + 8
       let name4= cacheHeaders[name3]
       
       
           expect(name4).to.be.at.least(1);
           return headers;
          });
      });
    });
  });