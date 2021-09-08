"use strict";
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $emailTxt() { return $('[name="email"]'); }
    get $passwordTxt() { return $('[placeholder="password"]'); }
    get $continueLnk() { return $('span=Continue'); }
    get $brandsLnk() { return $('[class="btn"] [class="d-none d-md-inline mr-1"]'); }

    // Helper method to avoid code duplication
    login({ email, password, portal, url = 'login' }) {
        // Navigate to specific url. You will be redirected after login
        browser.url('./' + url);
        // Login as brand
        if (portal === 'brands') {
            if ($('[data-testid="dialog_iframe"]').isDisplayed()) {
                browser.switchToFrame($('[data-testid="dialog_iframe"]'));
                $('[aria-label="close"]').click()
                browser.switchToFrame(null);
            }
            this.$brandsLnk.click();
        };
        // Type in email and password
        this.$emailTxt.waitForClickable();
        this.$emailTxt.setValue(email);
        this.$passwordTxt.setValue(password);

        // Click on continue aka login
        this.$continueLnk.click();
    }
}
module.exports = new Login();