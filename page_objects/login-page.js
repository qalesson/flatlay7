"use strict";

const dashboardBrandsPage = require("./brands/dashboard/dashboard-brands-page");
const CampaignsApi = require("../api/brands/campaigns-api")

class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $emailTxt() { return $('[name="email"]'); }
    get $passwordTxt() { return $('[placeholder="password"]'); }
    get $continueLnk() { return $('span=Continue'); }
    get $brandsLnk() { return $("span=I'm a Brand"); }
    get $iframe () { return $('[data-testid="dialog_iframe"]');}
    get $fBPopupCloseLnk () { return $('[aria-label="close"]');}

    // Helper method to avoid code duplication
    login({ email, password, portal, url = 'login' }) {
        // Navigate to specific url. You will be redirected after login
        browser.url('./' + url);
        // Login as brand
        if (portal === 'brands') {
            // Close FB popup if its there
            this.closeFBPopup();
            // Click on brands login radio button
            this.$brandsLnk.click();
        };
        // Type in email and password
        this.$emailTxt.waitForClickable();
        this.$emailTxt.setValue(email);
        this.$passwordTxt.setValue(password);

        // Click on continue aka login
        this.$continueLnk.click();
        this.$continueLnk.waitForClickable({ reverse: true });
        CampaignsApi.$selectorForToken.waitForExist({ timeout: 10000 });
        return browser.execute("return localStorage.brandToken");
        
    }

    closeFBPopup() {
        if (this.$iframe.isDisplayed()) {
            browser.switchToFrame(this.$iframe);
            this.$fBPopupCloseLnk.click()
            browser.switchToFrame(null);
        }
    }
}
module.exports = new Login();