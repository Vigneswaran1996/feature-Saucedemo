import { Page, expect } from "@playwright/test"

export default class YourInfoPage {

    constructor(public page: Page) {

    }

    async enterFirstName(infofirstname: string) {
        await this.page.locator("#first-name").isVisible();
        await this.page.locator("#first-name").fill(infofirstname);
    }

    async enterLastName(infolastname: string) {
        await this.page.locator("#last-name").isVisible();
        await this.page.locator("#last-name").type(infolastname);
    }

    async postalCode(infopostalcode: string) {
        await this.page.locator("#postal-code").isVisible();
        await this.page.locator("#postal-code").type(infopostalcode);
    }

    async continueBtn() {
        await this.page.click("input[value='Continue']")
    }

    
}