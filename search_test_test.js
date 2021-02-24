Feature('search');

Scenario('test something', async ({ I }) => {
    I.amOnPage('https://youtube.com');
    I.fillField('search_query', 'Armenia');
    I.click( '#search-icon-legacy');
    I.wait(5);
   
   const a = await I.grabTextFromAll(  "#video-title > yt-formatted-string" );
  
   a.forEach(function(el, i){
       if (i < 10){
        console.log(el);
       }
   })


    
});
