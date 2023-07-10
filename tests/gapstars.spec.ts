// @ts-check
const { test, expect } = require('@playwright/test');
import { HomePage } from '../pages/homepage';
import  { AddElementsPage } from '../pages/addElementsPage';
import  { CheckBoxPage } from '../pages/CheckBoxPage';
import  { ContextMenu } from '../pages/ContextMenu';

let homepage;

test.beforeEach(async ({ page }) => {
 let homepage = new HomePage(page);
  await homepage.open();

});

test('should allow me to navigate A/B Testing URL - TC_001', async ({ page }) => {
  let homepage = new HomePage(page);
  await homepage.navigate_to_ABPage();
 
});
test('should allow me to add or delete function - TC_002 ', async ({ page }) => {
  let homepage = new HomePage(page);
  await homepage.navigate_to_AddORRemove_page();
  let addElePg = new AddElementsPage(page);
  addElePg.verify_Add_element_page();
  addElePg.click_on_addElement_button();
  addElePg.Verify_delete_function_enabled();


});
test('should allow me to  handle basic auth - TC_003', async ({page,browser}) => {
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

test('should allow me to verify check boxes - TC_004', async ({ page }) => {
  let homepage = new HomePage(page);
  await homepage.navigate_to_checkBoxes();
  let checkBoxPg = new CheckBoxPage(page);
  checkBoxPg.verifyInitialCheckBoxStatus();
  checkBoxPg.clickOnCheckBox();
  checkBoxPg.verifyCheckBoxPage();
  
});


test('should allow me to do right click - TC_005 ', async ({ page }) => {
  let homepage = new HomePage(page);
  await homepage.Navigate_to_contextMenu();
  let contextPg = new ContextMenu(page);
  contextPg.verifyContextPage();
  contextPg.clickOnRightClick();
});



