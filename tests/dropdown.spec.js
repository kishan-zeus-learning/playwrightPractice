const {test,page, expect} = require("@playwright/test");

test("Select Values From Dropdown",async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label:"Goa"});

    // await page.waitForTimeout(2000);

    await page.locator("#state").selectOption({value:"Gujarat"});
   
    // await page.waitForTimeout(2000);

    await page.locator("#state").selectOption({index:3});

    const value=await page.locator("#state").textContent();

    // console.log("All dropdown values"+value);

    expect(value.includes("Kerala")).toBeTruthy();

    // await page.waitForTimeout(5000);

    let state = await page.$("#state");
    let allElements = await state.$$("option");
    // console.log(allElements);

    for(let i=0;i<allElements.length;i++){
        let element=allElements[i];

        let value= await element.textContent();

        console.log(value);
    }
    // console.log(state);

    
    await page.locator("#hobbies").selectOption(['Playing','Swimming','Reading']);
    
    await page.waitForTimeout(5000);
})