const {expect} = require("@playwright/test");
class HomePage{
    constructor(page){
        this.page=page;
        this.menu="//img[@alt='menu']";
        this.logoutoption= "//button[normalize-space()='Sign out']";
        this.manageOption="//span[normalize-space()='Manage']";

    }

        async verifyManageOption(){
        await expect(this.page.locator(this.manageOption)).toBeVisible();
    }


    async logoutFromApplication(){
        await this.page.click(this.menu);
        await this.page.click(this.logoutoption);
    }
}

module.exports=HomePage;