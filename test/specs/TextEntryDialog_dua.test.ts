import { APIDemosActions } from "../actions/TextEntryDialog.action";

const apiDemosAction = new APIDemosActions(); let fillText: string;

describe("ApiDemos - Text Entry Dialog (Advanced)", async () => {
    before(async function() {
        fillText = "John Doe";
    })

    beforeEach(async function() {
        await driver.relaunchActiveApp();
        fillText = this.currentTest?.title as string
    })

    afterEach(async function() {
        if (this.currentTest?.state === "failed") {
            await driver.takeScreenshot();
            await driver.saveScreenshot(`./screenshots/${this.currentTest.title}.png`);
        }
    })

    after(async function() {
        await driver.terminateApp('io.appium.android.apis');
    })

    it("@TC001 - First Scenario", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField(fillText);
        await apiDemosAction.fillPasswordField(fillText);

        expect(await apiDemosAction.getNameFieldValue()).toEqual(fillText);
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });

    it("@TC002 - Second Scenario", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField(fillText);
        await apiDemosAction.fillPasswordField(fillText);

        expect(await apiDemosAction.getNameFieldValue()).toEqual(fillText);
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });

    it("@TC003 - Third Scenario", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.clickAlertDialogsBtn();
        await apiDemosAction.clickTextEntryDialogBtn();
        await apiDemosAction.fillNameField(fillText);
        await apiDemosAction.fillPasswordField(fillText);

        expect(await apiDemosAction.getNameFieldValue()).toEqual(fillText);
        expect(await apiDemosAction.isPasswordFieldDisplayed()).toBe(true);

        await apiDemosAction.clickOkBtn();
    });
});