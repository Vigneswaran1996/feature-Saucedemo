import test, { Page, chromium, expect } from "@playwright/test";


test.describe("login test",()=>{
    // let page:Page
    // let context:Context

    test.beforeAll(async({browser,page})=>{
    // context  =  await  browser.newContext();
    // page = await context.newPage();
        

    await page.goto("https://www.saucedemo.com/")



    })
})  


    test("Valid Username and Password Login Test",async({page}) => {

        // const broweser = await chromium.launch({
        //     headless:false
        // });
        // const context  =  await  broweser.newContext();
        // const page = await context.newPage();

        await page.fill("//input[@data-test='username']","standard_user")

        await page.fill("//input[@data-test='password']","secret_sauce")

        await page.click("//input[@data-test='login-button']")
        
        await page.click("//button[text()='Open Menu']");

        await page.click("//a[contains(text(),'Logout')]")

    })


    test("Invalid Username and Password Login Test",async({page}) => {

        await page.goto("https://www.saucedemo.com/")
        await page.reload();

        await page.waitForTimeout(5000)

        await page.fill("//input[@data-test='username']","standard_us")

        await page.fill("//input[@data-test='password']","secret_sauce")

        await page.click("//input[@data-test='login-button']")

        const locator = page.getByText('Epic sadface: Username and password do not match any user in this service');

        await expect(locator).toBeVisible();

    })
