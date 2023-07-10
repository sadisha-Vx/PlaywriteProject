
import {Page, expect ,test} from '@playwright/test'

export class HomePage {
    readonly page: Page;
constructor(page: Page) {
        this.page = page;
    }
async open() {
        await this.page.goto('https://the-internet.herokuapp.com/');
      
    }
async navigate_to_ABPage() {
     await  this.page.getByText('A/B Testing').click();
    
    }
    async navigate_to_AddORRemove_page() {
        await  this.page.getByText('Add/Remove Elements').click();
       }

       async navigate_to_checkBoxes() {
        await  this.page.getByText('Checkboxes').click();
       }

       async Navigate_to_contextMenu() {
        await  this.page.getByText('Context Menu').click();
       
       }

}
