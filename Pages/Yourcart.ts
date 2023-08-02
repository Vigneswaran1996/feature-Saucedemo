import { Page } from "@playwright/test"

export default class YourCart{

    constructor(public page:Page){

    }

    async yourCart(){

        await this.page.click("#checkout")

    }

}   