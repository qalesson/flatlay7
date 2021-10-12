"use strict";

class Registration {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $usrnameTxt() { return $('[placeholder="username"]'); }
    get $emailTxt() { return $('[placeholder="email"]'); }
    get $passwordTxt() { return $('[placeholder="password"]'); }
    get $continueLnk() { return $('span=Continue'); }
    get $brandsLnk() { return $('[class="btn"] [class="d-none d-md-inline mr-1"]'); }
    get $iframe () { return $('[data-testid="dialog_iframe"]');}
    get $fBPopupCloseLnk () { return $('[aria-label="close"]');}
    get $existingEmailErr () { return $('mat-error=Email is already registered');}
    get $noPasswordErr () { return $('mat-error=Password is required');}

    // Helper method to avoid code duplication
    register({ username, email, password, portal, url = 'register' }) {
        // Navigate to specific url
        browser.url('./' + url);
        // Register as brand
        if (portal === 'brands') {
            // Close FB popup if its there
            this.closeFBPopup();
            // Click on brands login radio button
            this.$brandsLnk.click();
        };
        // Type in email and password
        this.$usrnameTxt.waitForClickable();
        this.$usrnameTxt.setValue(username);
        this.$emailTxt.setValue(email);
        this.$passwordTxt.setValue(password);
        // Click on continue aka login
        this.$continueLnk.click();
    }
    closeFBPopup() {
        if (this.$iframe.isDisplayed()) {
            browser.switchToFrame(this.$iframe);
            this.$fBPopupCloseLnk.click()
            browser.switchToFrame(null);
        }
    }
}
module.exports = new Registration();