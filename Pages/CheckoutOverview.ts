import { Page } from "@playwright/test"

export default class CheckoutOverviewPage{

    constructor(public page:Page){

    }

    async ClickFininsh(){

        await this.page.click("#finish")
        
    }


    async BackToHome(){

        await this.page.click("#checkout_complete_container")

    }

}