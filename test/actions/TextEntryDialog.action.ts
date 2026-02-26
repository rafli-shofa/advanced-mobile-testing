// TextEntryDialog.action.ts
import { APIDemosPage } from "../pageobjects/TextEntryPage.page";

export class APIDemosActions {
    async waitForAppBtn() {
        await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
    }

    async clickAppBtn() {
        await APIDemosPage.appBtn().click();
    }

    async clickAlertDialogsBtn() {
        await APIDemosPage.alertDialogsBtn().click();
    }

    async clickTextEntryDialogBtn() {
        const btn = APIDemosPage.textEntryDialogBtn();
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
    }

    async fillNameField(query: string) {
        await APIDemosPage.nameField().setValue(query);
    }

    async fillPasswordField(query: string) {
        await APIDemosPage.passwordField().setValue(query);
    }

    async getNameFieldValue(): Promise<string> {
        return await APIDemosPage.nameField().getText();
    }

    async isPasswordFieldDisplayed(): Promise<boolean> {
        return await APIDemosPage.passwordField().isDisplayed();
    }

    async clickOkBtn() {
        await APIDemosPage.okBtn().waitForDisplayed({ timeout: 5000 });
        await APIDemosPage.okBtn().click();
    }
}