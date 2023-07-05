// @ts-check
const { test, expect, chromium } = require('@playwright/test');
import { HomePage } from '../pages/homepage';

let homepage;

test.beforeEach(async ({ page }) => {
  homepage = new HomePage(page);
  await homepage.open();

});

test(' verify navigation is working', async ({ page }) => {
  await homepage.goToLoginPage();
});
test('verify add or remove delete button', async ({ page }) => {
  await homepage.addOrRemove();
});
test('validate Handling basic auth', async ({page,browser}) => {
  
   const context =await browser.newContext({
    httpCredentials :{
      username :"admin",
      password :"admin2"
    }
  })
  page= await context.newPage()
  page.goto("https://the-internet.herokuapp.com/basic_auth")

  const header=await page.$("h3")
  if(header)
  {
  console.log(await header.textContent());
  expect(await header.textContent()).toBe("Basic Auth")
  }
})

test('Verify checkBoxes ', async ({ page }) => {
  await homepage.checkBoxes();
});


test('verify Right click ', async ({ page }) => {
  await homepage.contextMenu();
});



