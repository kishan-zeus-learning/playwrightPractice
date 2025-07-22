import {test,expect} from "@playwright/test";

test("Autocomplete testing",async({page})=>{
    await page.goto("https://www.google.com/");

    await page.locator('div[role="button"]:has-text("Not interested")').click();

    await page.locator("textarea[name='q']").pressSequentially("Nikola Tesla");

    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown");
    
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(2000);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);
})


test("Autocomplete testing using loop",async({page})=>{
    await page.goto("https://www.google.com/");

    await page.locator('div[role="button"]:has-text("Not interested")').click();

    await page.locator("textarea[name='q']").pressSequentially("Nikola Tesla");

    await page.waitForSelector("//li[@role='presentation']");

    const elements=await page.$$("//li[@role='presentation']");
    const n=elements.length;
    for(let i=0;i<n;i++){
        const text = await elements[i].textContent();

        if(text.includes("death")){
            await elements[i].click();
            break;
        }
    }

    await page.waitForTimeout(2000);
})
