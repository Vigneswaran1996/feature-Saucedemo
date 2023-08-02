import { Page } from "@playwright/test"

export default class LoginPage{

    constructor(public page:Page){ }

    async login(username:string,password:string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.loginButton();

        }

    async enterUsername(username: string){

        await this.page.locator("#user-name")
        .type(username);
        
    }

    async enterPassword(password: string){

        await this.page.locator("#password")
        .type(password);
        
    }

    async loginButton(){

        await Promise.all([

            await this.page.click("input[value='Login']")
        ])

       
    
    }

}