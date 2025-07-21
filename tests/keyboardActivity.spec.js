const {test,expect} = require("@playwright/test");

test("keyboard activities",async({page})=>{
    await page.goto("https://www.google.com/");

    // await page.waitForTimeout(3000);
    await page.locator('div[role="button"]:has-text("Not interested")').click();



    await page.locator("textarea[name='q']").focus();

    await page.keyboard.type("Kishan Vadhia")

    await page.keyboard.press("Control+A");
    
    await page.keyboard.press("Control+C");

    await page.waitForTimeout(1000);
    
    await page.keyboard.press("Backspace");
    
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(1000);
    
    

    await page.keyboard.down("Shift");

    for(let i=0;i<6;i++){
        await page.waitForTimeout(500);
        await page.keyboard.press("ArrowLeft");
    }
    await page.keyboard.up("Shift");
    
    await page.keyboard.press("Backspace");

    await page.waitForTimeout(3000);
})