import { APIDemosPage } from "../pageobjects/TextEntryPage.page";

export class APIDemosActions {
    async waitForAppBtn() {
        await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
    }

    async clickAppBtn() {
        await APIDemosPage.appBtn().click();
    }

    async verifyAppBtn() {
        return await APIDemosPage.appBtn().isDisplayed();
    }

    async ClickAlertDialogsBtn() {
        await APIDemosPage.alertDialogsBtn().click();
    }

    async ClickTextEntryDialogBtn() {
        const textEntryDialogBtn = $(
        'android=new UiScrollable(new UiSelector().scrollable(true))' +
        '.scrollIntoView(new UiSelector().resourceId("io.appium.android.apis:id/text_entry_button"))'
        );
        await textEntryDialogBtn.waitForDisplayed({ timeout: 5000 });
        await textEntryDialogBtn.click();
    }

    async fillNameField(query: string) {
        await APIDemosPage.nameField().setValue(query);
    }

    async fillPasswordField(query: string) {
        await APIDemosPage.passwordField().setValue(query);
    }

    async getNameFieldValue() {
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