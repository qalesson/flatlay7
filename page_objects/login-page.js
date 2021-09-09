"use strict";

const dashboardBrandsPage = require("./brands/dashboard-brands-page");

class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $emailTxt() { return $('[name="email"]'); }
    get $passwordTxt() { return $('[placeholder="password"]'); }
    get $continueLnk() { return $('span=Continue'); }
    get $brandsLnk() { return $('[class="btn"] [class="d-none d-md-inline mr-1"]'); }
    get $iFrame () { return $('[data-testid="dialog_iframe"]');}
    get $closeiFrame () { return $('[aria-label="close"]');}

    // Helper method to avoid code duplication
    login({ email, password, portal, url = 'login' }) {
        // Navigate to specific url. You will be redirected after login
        browser.url('./' + url);
        // Login as brand
        if (portal === 'brands') {
            // Close FB popup if its there
            this.closeThatFkngPopup();
            // Click on brands login radio button
            this.$brandsLnk.click();
        };
        // Type in email and password
        this.$emailTxt.waitForClickable();
        this.$emailTxt.setValue(email);
        this.$passwordTxt.setValue(password);

        // Click on continue aka login
        this.$continueLnk.click();
    }

    closeThatFkngPopup() {
        if (this.$iFrame.isDisplayed()) {
            browser.switchToFrame(this.$iFrame);
            this.$closeiFrame.click()
            browser.switchToFrame(null);
        }
    }
}
module.exports = new Login();