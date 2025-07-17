import {test,expect} from "@playwright/test";

test("Verify error message",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").pressSequentially("Admin");

    await page.getByPlaceholder("Password").pressSequentially("Wrong Password");

    await page.locator("//button[normalize-space()='Login']").click();

    const errorMessage=await page.locator("").textContent();
})