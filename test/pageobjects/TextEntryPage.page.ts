// TextEntryPage.page.ts
export class APIDemosPage {
    static appBtn() {
        return $('//android.widget.TextView[@content-desc="App"]');
    }

    static alertDialogsBtn() {
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

    static textEntryDialogBtn() {
        return $('~Text Entry dialog');
    }

    static nameField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
    }

    static passwordField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
    }

    static okBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }
}