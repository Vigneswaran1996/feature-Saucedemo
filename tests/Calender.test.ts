import {expect, test} from "@playwright/test"



test("handling date picker fill in  calender",async({page})=>{

await page.goto("https://demo.automationtesting.in/Datepicker.html");

let bdate = "19/12/1996"

await page.fill("id=datepicker2",bdate);
await page.waitForTimeout(3000)


})


test("handling date picker different month date in calender",async({page})=>{

    await page.goto("https://www.htmlelements.com/demos/datetimepicker/overview/index.htm");
    
    await page.locator("//input[@aria-label='Enter date']");

    await page.locator("(//div[contains(@class,'smart-drop-down-button smart-calendar-button')])[1]").click();
    
    const prev = page.locator("(//span[@class='smart-arrow-left smart-arrow'])[1]");
   
    const nextprev = page.locator("(//span[@class='smart-arrow-left smart-arrow'])[1]");

   await page.waitForTimeout(3000)

   await prev.click();

   await page.click("(//div[text()='11'])[1]");

    await page.waitForTimeout(3000)
    
    })