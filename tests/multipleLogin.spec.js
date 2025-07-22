import {test,expect} from "@playwright/test";

const testData=JSON.parse(JSON.stringify(require("../logindata.json")));

test.describe("Data Driven Login Test",()=>{
    for(const data of testData){
        test.describe(`Login with user ${data.id}`,()=>{
            test("Login to Application",async({page})=>{
                await page.goto("https://freelance-learn-automation.vercel.app/login");

                await page.locator("#email1").pressSequentially(data.username);

                await page.locator("#password1").pressSequentially(data.password);
            });
        })
    }
})