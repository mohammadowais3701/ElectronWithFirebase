const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
let website="https://brandontest.activehosted.com";//take by user
async function run(website,email,password,urls) {
  alert(website)
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get(website);
    await driver.findElement(By.id("user")).sendKeys("test@test.com");//take by user
    await driver.findElement(By.id("pass")).sendKeys("Fivrr1234");//take by user
    await driver.findElement(By.xpath("//input[@type='submit']")).click()
    //iterate this code, according to arr count
    await driver.get(website+'/app/automations?showRecipes=true');
    setTimeout(()=>{
      driver.findElement(By.className("ac_button button_small greybtn importauto")).click(); 
    },3000)
    setTimeout(()=>{
    driver.executeScript('document.getElementsByClassName("ac_input full_width ember-text-field ember-view")[0].value="https://tplshare.com/n7vgYvU";')
    setTimeout(()=>{ 
    driver.executeScript('document.getElementsByTagName("camp-button")[0].click();');
    setTimeout(()=>{
    driver.findElement(By.className("ac_button button_small greybtn importauto")).click();      
        },2000)
        driver.executeScript('let btn=document.getElementsByTagName("camp-button")[5];btn.click()')
    },3000);
},6000)
//loop end here
  } 
  catch(err){
   alert(err);
   await driver.quit();
  }
  finally {

  }
};

  module.exports={run}