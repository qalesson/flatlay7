"use strict";

const dashboardBrandsPage = require("./brands/dashboard/dashboard-brands-page");

class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $emailTxt() { return $("#mat-input-1"); }
    get $passwordTxt() { return $('[placeholder="password"]'); }
    get $continueLnk() { return $('span=Continue'); }
    get $brandsLnk() { return $("span=I'm a Brand"); }
    get $iframe () { return $('[data-testid="dialog_iframe"]');}
    get $fBPopupCloseLnk () { return $('[aria-label="close"]');}
    get $fBPopupCloseLnk() { return $('[aria-label="close"]'); }
    get $joinTodayBtn() { return $('[class="btn btn-flatlay-black px-3 text-white ml-2 link2"]'); }
    get $usernameTxt() { return $("#mat-input-0"); }
    get $sportsCommunityLbl() { return $("span=Sports"); }
    get $creatorsToFollowDisplay() { return $('[class="creators-wrapper mb-3"]'); }
    get $startExploringBtn() { return $("button=Start exploring"); }
    get $continueBtn() { return $("button=Continue"); }

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
    }

    closeFBPopup() {
        if (this.$iframe.isDisplayed()) {
            browser.switchToFrame(this.$iframe);
            this.$fBPopupCloseLnk.click()
            browser.switchToFrame(null);
        }
    }

    // Registration
    register( portal, email, password, username,) {
      if (portal === "brands") {
        // Click on Brands register radio button
        this.$brandsLnk.click();
        // Type in email and password
        this.$emailTxt.waitForClickable();
        this.$emailTxt.setValue(email);
        this.$passwordTxt.setValue(password);
      } else if (portal === "creators") {
        this.$passwordTxt.waitForClickable();
        this.$emailTxt.setValue(email);
        this.$passwordTxt.setValue(password);
        this.$usernameTxt.setValue(username);
        this.$continueLnk.click();
      }
      // Choose communities to follow
      this.$continueLnk.waitForClickable();
      this.$sportsCommunityLbl.click();
      this.$continueLnk.click();
        
      // Choose creators to follow
      this.$creatorsToFollowDisplay.waitForDisplayed();
      this.$continueBtn.click();
        
      // Final registration part
        this.$startExploringBtn.waitForDisplayed();
        this.$startExploringBtn.click();
    }
}
module.exports = new Login();