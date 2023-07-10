import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export   class AddElementsPage
{
page: Page;
constructor(page)
{
    this.page=page;
      
}


async verify_Add_element_page() {
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/'); 
   
   }

   async click_on_addElement_button() {
    await this.page.getByRole('button').click();
    const locator = this.page.locator('#elements')
    await expect(locator).toContainText('Delete');
   
   }

   async Verify_delete_function_enabled() {
    const locator = this.page.locator('#elements')
    await expect(locator).toContainText('Delete');
   
   }

}