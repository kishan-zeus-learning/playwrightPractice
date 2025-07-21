import {test,expect} from "@playwright/test"

test("handle alert",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    
    
    page.on("dialog",async(dialogWindow)=>{
        console.log(dialogWindow.type());
        expect(dialogWindow.type()).toContain("alert");
        expect(dialogWindow.message()).toContain("I am a JS Alert");
        await page.waitForTimeout(2000);
        await dialogWindow.accept();
        
    })
    await page.locator("//button[text()='Click for JS Alert']").click();
})


test("handle confirm box",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    
    
    page.on("dialog",async(dialogWindow)=>{
        console.log(dialogWindow.type());
        expect(dialogWindow.type()).toContain("confirm");
        expect(dialogWindow.message()).toContain("I am a JS Confirm");
        await page.waitForTimeout(2000);
        await dialogWindow.dismiss();
        
    })
    await page.locator("//button[text()='Click for JS Confirm']").click();
})


test("handle prompt dialog",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    
    
    page.on("dialog",async(dialogWindow)=>{
        console.log(dialogWindow.type());
        expect(dialogWindow.type()).toContain("prompt");
        expect(dialogWindow.message()).toContain("I am a JS prompt");
        await page.waitForTimeout(2000);
        
        await dialogWindow.accept("Nikola Tesla");
        // await dialogWindow.dismiss();
        
    })
    await page.locator("//button[text()='Click for JS Prompt']").click();
    await page.waitForTimeout(5000);
})