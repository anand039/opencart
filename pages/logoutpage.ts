import { Page, Locator } from '@playwright/test';
import { homepage } from './homepage';

export class LogoutPage {
    private readonly page: Page;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;
        // Using CSS selector with :has-text() pseudo-class for text matching
        this.btnContinue = page.locator('.btn.btn-primary');
    }

    async clickContinue(): Promise<homepage> {
        await this.btnContinue.click();
        return new homepage(this.page);
    }

    async isContinueButtonVisible(): Promise<boolean> {
        return await this.btnContinue.isVisible();
    }
}