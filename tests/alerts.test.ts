import {expect, test} from "@playwright/test"



test("handling simple alerts",async({page})=>{

await page.goto("https://demo.automationtesting.in/Alerts.html");

page.on("dialog", async (alert) => {

const text = await alert.message();   

console.log(text);

await alert.accept();

})
await page.locator("button:has-text('click the button to display an  alert box:')").click();


})

test("handling confirm alerts",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");

    await page.click("//a[contains(text(),'Alert with OK & Cancel')]")
    
    page.on("dialog", async (alert) => {
    
    const text = await alert.message();   
    
    console.log(text);
    
    await alert.dismiss();
    
    })
    await page.locator("button:has-text('click the button to display a confirm box')").click();

    await page.waitForTimeout(3000);

    expect(page.locator("id=demo")).toContainText("You Pressed Cancel"); 
})


test("handling prompt alerts",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");

    await page.click("//a[contains(text(),'Alert with Textbox')]")
    
    page.on("dialog", async (alert) => {
    
    const text = await alert.message();   
    
    console.log(text);
    
    await alert.accept("Alert test");
    
    })
    await page.locator("button:has-text('click the button to demonstrate the prompt box')").click();

    await page.waitForTimeout(3000);

    expect(page.locator("id=demo1")).toContainText("Alert test"); 
})