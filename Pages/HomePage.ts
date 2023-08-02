import { Page } from "@playwright/test"

export default class HomePage{

    constructor(public page:Page){

    }

    async AddtoCart(){
        await this.page.waitForTimeout(1000);
        await this.page.click("button#add-to-cart-sauce-labs-backpack");

    }

    async AddtoCartBtn(){

        await this.page.click("//a[@class='shopping_cart_link']");
    }

}    