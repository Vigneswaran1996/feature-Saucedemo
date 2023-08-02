import {expect, test} from "@playwright/test"


import LoginPage from "../Pages/Login"
import HomePage  from "../Pages/HomePage"
import YourCart from "../Pages/Yourcart"
import YourInformation from "../Pages/YourInformation"
import CheckoutOverview from "../Pages/CheckoutOverview"
import Logout from "../Pages/Logout"
import loginjson from "../testdata/login.json"

test.describe.serial("Page Object model - Saucedemo website",async() => {

    
    /**
     * This test case will be execution of login to sauce demo website
     * 
     */
    test("Login to saucedemo website",async ({page, baseURL}) => {

        const login = new LoginPage(page);
        
         await page.goto(`${baseURL}`)
        //  its used in constructor class page
         await login.enterUsername(loginjson.LoginDetails.username);
         await login.enterPassword(loginjson.LoginDetails.password);
         await login.loginButton();
        //  expect(await page.title).toBe("Swag Labs");
     
     })
      /**
     * This test case will be adding items to the cart.
     * 
     */
     test("Add to cart",async ({page, baseURL}) => {
         const login = new LoginPage(page);
         const homepage = new HomePage(page);
         const addToCart = new YourCart(page);
         await page.goto(`${baseURL}`)
         await login.login(loginjson.LoginDetails.username,loginjson.LoginDetails.password);
         await page.waitForTimeout(3000);
         await homepage.AddtoCart();
         await homepage.AddtoCartBtn();
         await addToCart.yourCart();
         
     })
     /**
     * This test case will be updating user information.
     * 
     */
     test("user information",async({page, baseURL}) =>{
        const login = new LoginPage(page);
         const userinformation = new YourInformation(page)
     
         await page.goto(`${baseURL}`)
         await login.login(loginjson.LoginDetails.username,loginjson.LoginDetails.password);
         await page.goto('https://www.saucedemo.com/checkout-step-one.html')
         await userinformation.enterFirstName(loginjson.LoginDetails.firstname);
         await userinformation.enterLastName(loginjson.LoginDetails.lastname);
         await userinformation.postalCode(loginjson.LoginDetails.postalcode);
     
     })
     /**
     * This test case will be the overview of the items that we have selected.
     * 
     */
     test("Checkout Overview",async({page, baseURL}) =>{
        const login = new LoginPage(page);
         const Checkoutoverview = new CheckoutOverview(page)
     
         await page.goto(`${baseURL}`)
         await login.login(loginjson.LoginDetails.username,loginjson.LoginDetails.password);
         await page.goto('https://www.saucedemo.com/checkout-step-two.html')
         await Checkoutoverview.ClickFininsh();
         await Checkoutoverview.BackToHome();
     })
     /**
     * This test case will be the used for 
     * logout from website.
     */
     test("Logout",async({page, baseURL}) =>{
        const login = new LoginPage(page);
         const weblogout = new Logout(page)
     
         await page.goto(`${baseURL}`)
         await login.login(loginjson.LoginDetails.username,loginjson.LoginDetails.password);
         await page.goto('https://www.saucedemo.com/checkout-step-two.html')
         await weblogout.ClickOption();
         await weblogout.logoutBtn();
     
     })

})





