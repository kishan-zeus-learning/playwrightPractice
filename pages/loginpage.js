const {expect} = require("@playwright/test");
class LoginPage{
    constructor(page){
        this.page=page;
        this.username="#email1";
        this.password="//input[@placeholder='Enter Password']";
        this.loginButton="//button[text()='Sign in']";
        this.header="//h2[normalize-space()='Sign In']";

    }

    async verifyLogIn(){
        await expect(this.page.locator(this.header)).toBeVisible();
    }


    async loginToApplication(user,pass){
        await this.page.fill(this.username,user);

        await this.page.fill(this.password,pass);

        await this.page.click(this.loginButton);

    }
}


module.exports=LoginPage;