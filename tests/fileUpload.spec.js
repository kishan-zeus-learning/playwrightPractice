const {test ,expect} = require("@playwright/test");

test("file upload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./upload/img1.jpg");
    await page.locator("#file-submit").click();
    // await page.locator("//h3");

    await expect(page.locator("//h3")).toHaveText("File Uploaded!");
})