"use strict";
class BrandsSettingsPage {
    get $$socialMediaName() { return $$('[class="d-flex flex-row social-item"]'); }
    get $$socialMediaConnectBtn() { return $$("span=Connect"); }

    get $profilePhoto() { return $('[class="profile-photo"]'); }
    get $settingsBtn() { return $('button=Settings'); }


    // Helper method to click Connect button by social media name   

    clickConnectBtnBySocialMedia(socialMediaChoiceTxt) {
        const socialMediaChoice = {};

        // Wait for at least 7 social media titles to become visible
        browser.waitUntil(() => {
            return this.$$socialMediaName.map((elem) => elem.isDisplayed()).length > 7;
        }, { timeout: 10000, timeoutMsg: 'Social media titles were not visible' });

        // Map all of the social media titles into an object
        this.$$socialMediaName.forEach(element => {
            socialMediaChoice[element.$('[class="mx-1 my-2 section-title"]').getText()] = element.$('.ml-auto');
        });

        // Click on connect button for social media by text
        socialMediaChoice[socialMediaChoiceTxt].click();
    }
}
module.exports = new BrandsSettingsPage();