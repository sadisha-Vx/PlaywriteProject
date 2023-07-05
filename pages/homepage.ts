
import {Page, expect ,test} from '@playwright/test'

export class HomePage {
    readonly page: Page;
constructor(page: Page) {
        this.page = page;
    }
async open() {
        await this.page.goto('https://the-internet.herokuapp.com/');
      
    }
async goToLoginPage() {
     await  this.page.getByText('A/B Testing').click();
     await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/abtest'); 
    
    }

    async addOrRemove() {
        await  this.page.getByText('Add/Remove Elements').click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/'); 
        await this.page.getByRole('button').click();
        const locator = this.page.locator('#elements')
        await expect(locator).toContainText('Delete');
       
       }

       async checkBoxes() {
        await  this.page.getByText('Checkboxes').click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
        expect(await this.page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy();
        expect(await this.page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy();
        await this.page.check('input[type=checkbox]:nth-child(1)');
        expect(await this.page.isChecked('input[type=checkbox]:nth-child(1)')).toBeTruthy();
       }

       async contextMenu() {
        await  this.page.getByText('Context Menu').click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
        await this.page.locator('#hot-spot').click({ button: 'right' });
       
       }

}
