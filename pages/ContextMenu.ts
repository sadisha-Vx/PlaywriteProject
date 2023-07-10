import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class ContextMenu {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }



    async verifyContextPage() {
        await  this.page.getByText('Context Menu').click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
       
       }
       async clickOnRightClick() {
        await this.page.locator('#hot-spot').click({ button: 'right' });
       
       }
}
