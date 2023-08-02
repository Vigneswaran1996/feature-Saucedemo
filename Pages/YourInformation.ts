import { Page } from "@playwright/test"

export default class YourInfoPage{

    constructor(public page:Page){

    }

    async enterFirstName(infofirstname: string){

        await this.page.locator("#first-name")
        .fill(infofirstname);
        
    }

    async enterLastName(infolastname: string){

        await this.page.locator("#last-name")
        .type(infolastname);
        
    }

    async postalCode(inpostalcode: string){

        await this.page.locator("#postal-code")
        .type(inpostalcode);
        
    }


    async continueBtn(){

        await this.page.click("input[value='Continue']")
    }

}