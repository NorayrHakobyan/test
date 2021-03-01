Feature('Find');

Scenario('test something', async ({ I }) => {
    I.amOnPage('https://www.amazon.com/');
    I.wait(1);
    I.fillField('#twotabsearchtextbox', 'hp laptops');
    I.click( '#nav-search-submit-button');
    I.wait(1);
    
    I.clickLink('Under $500' );
    
    
   
 
    
    for(let i = 0; i < 3; i++){

        I.wait(3);

        let Name = await  I.grabTextFromAll('[data-component-type="s-search-result"] .a-section.a-spacing-medium .a-size-medium.a-color-base.a-text-normal');
        
        console.log(Name);

        if(i !== 2){
    
            I.pressKey('End');
            I.wait(1);
            I.pressKey('Page Up');     
            I.click('Next');
        }
            
    }
    
})


    


