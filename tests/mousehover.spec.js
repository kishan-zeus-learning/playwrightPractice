const {test, expect} = require("@playwright/test");

test("Valid Login", async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter email").pressSequentially("admin@email.com");

    await page.getByPlaceholder("Enter Password").pressSequentially("admin@123");

    await page.waitForTimeout(3000);
    
    await page.getByRole("button",{name:"Sign in"}).click();
    
    await page.locator("//span[normalize-space()='Manage']").hover();
    await page.waitForTimeout(3000);
    
    await page.locator("//a[normalize-space()='Manage Courses']").click();
    
    await page.waitForTimeout(3000);
})