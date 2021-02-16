const {Builder, By, Key, until} = require("selenium-webdriver");
const { elementsLocated } = require("selenium-webdriver/lib/until");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://www.youtube.com");
    await driver.findElement(By.name("search_query")).sendKeys("Armenia", Key.RETURN);
    driver.findElements(By.css('#title-wrapper > h3')).then(function(elements){
        elements.forEach(function(val, i){
            if (i < 10){
                val.getText().then(function(txt){
                    console.log("The name of video is " + txt);
                }) 
            }          
        });

    });
   // await driver.quit();
   
}


example();