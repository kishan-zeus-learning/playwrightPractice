import  {test,expect} from '@playwright/test';

test.use({viewport:{width:1600 , height:773}});


test("Validate login and logout",async({page})=>{

    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").pressSequentially("Admin",{delay:500});

    await page.locator("input[name='password']").pressSequentially("admin123",{delay:500});

    
    await page.locator("//button[normalize-space()='Login']").click();
    
    await expect(page).toHaveURL(/dashboard/);
    
    await page.getByAltText("profile picture").first().click();
    
    await page.getByText("Logout").click();
    
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/login/);

})