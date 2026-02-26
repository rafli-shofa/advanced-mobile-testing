import { APIDemosActions } from "../actions/TextEntryDialog.action";

const apiDemosAction = new APIDemosActions();

describe("ApiDemos - Text Entry Dialog (Manual)", () => {

    beforeEach(async () => {
        await driver.relaunchActiveApp();
        await apiDemosAction.waitForAppBtn();
    });

    afterEach(async function () {
        if (this.currentTest?.state === "failed") {
            await driver.saveScreenshot(
                `./screenshots/${this.currentTest.title}.png`
            );
        }
    });

    it("@TC 001 - Valid Data (Password numbers)", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField("John Doe");
        await apiDemosAction.fillPasswordField("123456");

        expect(await apiDemosAction.getNameFieldValue()).toEqual("John Doe");
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });

    it("@TC 002 - Valid Data (Password texts)", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField("John Doe");
        await apiDemosAction.fillPasswordField("johndoe");

        expect(await apiDemosAction.getNameFieldValue()).toEqual("John Doe");
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });

    it("@TC 003 - Valid Data (Password: combination)", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField("John Doe");
        await apiDemosAction.fillPasswordField("John123@");

        expect(await apiDemosAction.getNameFieldValue()).toEqual("John Doe");
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });

    it("@TC 004 - Invalid Data (Password empty)", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField("John Doe");
        await apiDemosAction.fillPasswordField("");


        expect(await apiDemosAction.getNameFieldValue()).toEqual("John Doe");
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);
        
        await apiDemosAction.clickOkBtn();
    });

    it("@TC 005 - Invalid Data (Name empty)", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField("");
        await apiDemosAction.fillPasswordField("123456");

        expect(await apiDemosAction.getNameFieldValue()).toEqual("");
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });

    it("@TC 006 - Invalid Data (Name and Password empty)", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField("");
        await apiDemosAction.fillPasswordField("");

        expect(await apiDemosAction.getNameFieldValue()).toEqual("");
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });
});