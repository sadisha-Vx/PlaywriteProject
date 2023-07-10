import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class CheckBoxPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async verifyCheckBoxPage() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
    }
    async verifyInitialCheckBoxStatus() {
        expect(await this.page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy();
        expect(await this.page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy();
    }

    async clickOnCheckBox() {
         await this.page.check('input[type=checkbox]:nth-child(1)');
    }
    
    async VerifyAfterCheckBoxStatus() {
        expect(await this.page.isChecked('input[type=checkbox]:nth-child(1)')).toBeTruthy();
    }
}
