const {test , expect}= require('@playwright/test');

test("My first Test",async function({page}){
    expect(10).toBe(10);
});

test.skip("My second Test",async function({page}){
    expect("a").toBe("c");
});

test("My third Test",async function({page}){
    expect(2.54).toBe(2.5400);
});

// test.only("My fourth Test",async function({page}){
//     expect(99).toBe(9.9);
// }); 

test("My fifth test",async ({page})=>{
    expect("Kishan Kumar ").toContain("Kishan");
})

test("My sixth test",async ({page})=>{
    expect("Kishan Kumar ".includes("Kumar")).toBeFalsy();
})

test("Verify Application Title", async ({page})=>{
    await page.goto("http://google.com");

    const url= await page.url();
    console.log("url is : ",url);

    const title=await page.title();

    console.log("Title is "+title);

    await expect(page).toHaveTitle("DuckDuckGo");
})