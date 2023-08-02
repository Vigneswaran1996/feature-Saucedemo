import { Page } from "@playwright/test"

export default class Logout{

    constructor(public page:Page){

    }

    async ClickOption(){
        await this.page.click("#react-burger-menu-btn")
    }

    async logoutBtn(){
        await this.page.click("#logout_sidebar_link")
    }
}