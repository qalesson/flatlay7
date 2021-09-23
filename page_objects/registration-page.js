"use strict";

const dashboardBrandsPage = require("./brands/dashboard/dashboard-brands-page");

class Registration {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $emailTxt1() { return $('[placeholder="email"]'); }
    get $passwordTxt() { return $('[placeholder="password"]'); }
    get $continueLnk() { return $('span=Continue'); }
    get $brandsLnk() { return $('[class="btn"] [class="d-none d-md-inline mr-1"]'); }
    get $iframe () { return $('[data-testid="dialog_iframe"]'); }
    get $fBPopupCloseLnk () { return $('[aria-label="close"]'); }
    get $UsernameRequiredError () { return $('mat-error=Username is required'); }
    get $usernameTxt(){ return $('[placeholder="username"]');}

    // Helper method to avoid code duplication
    login({ email, password,username, portal, url = 'registration' }) {
        // Navigate to specific url. You will be redirected after login
        // browser.url('./' + url);
        // Login as brand
        if (portal === 'brands') {
            // Close FB popup if its there
            this.closeFBPopup();
            // Click on brands login radio button
            this.$brandsLnk.click();
        };
        // Type in email and password
        this.$emailTxt1.waitForClickable();
        this.$emailTxt1.setValue(email);
        this.$passwordTxt.setValue(password);
        this.$usernameTxt.setValue(username)


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