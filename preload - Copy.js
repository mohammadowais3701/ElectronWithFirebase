const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
let website="https://brandontest.activehosted.com";//take by user
async function run(website,email,password,urls) {
  //console.log(urls);
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get(website);
    await driver.findElement(By.id("user")).sendKeys(email);//take by user
    await driver.findElement(By.id("pass")).sendKeys(password);//take by user
    await driver.findElement(By.xpath("//input[@type='submit']")).click()
    //iterate this code, according to arr count
    for (let index = 0; index < urls.length; index++) {
    await driver.get(website+'/app/automations?showRecipes=true');
    sleep(2000)
    await driver.findElement(By.className("ac_button button_small greybtn importauto")).click(); 
    sleep(2000)
    console.log(urls[index]);
    await driver.executeScript(`document.getElementsByClassName("ac_input full_width ember-text-field ember-view")[0].value='${urls[index]}';`);
    sleep(3000)
    await driver.executeScript('document.getElementsByTagName("camp-button")[0].click();');
    sleep(6000)
    await driver.findElement(By.className("ac_button button_small greybtn importauto")).click();  
    sleep(5000)    
    await driver.executeScript('let btn=document.getElementsByTagName("camp-button")[5];btn.click()')
    sleep(3000);
    }
}
  
  catch(err){
   alert(err);
   await driver.quit();
  }
  finally {

  }
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
      currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

