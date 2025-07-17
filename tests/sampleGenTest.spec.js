import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl&zx=1752759542208&no_sw_cr=1');
  await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.locator('.lnXdpd > path').first().click();
});