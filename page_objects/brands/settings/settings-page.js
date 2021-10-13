"use strict";
class SettingsBrand {
    get $$socialAccountsItems() { return $$('[class="d-flex flex-column ng-star-inserted"]'); }
    get $$socialAccountsTitles() { return $$('[class="mx-1 my-2 section-title"]'); }
    get $$socialAccountsConnectBtn() { return $$('[class="ml-auto mx-1 my-2"]'); }

    connectSocialAccount(socialAccountText) {
        const socialAccounts = {};
        // Wait for at least 10 settings items to become visible
        browser.waitUntil(() => {
            return this.$$socialAccountsItems.map((elem) => elem.isDisplayed()).length > 7;
        }, 10000, '8 items were not visible');
        // Map all of the items into an object 
        this.$$socialAccountsItems.forEach(element => {
            socialAccounts[element.$('[class="mx-1 my-2 section-title"]').getText()] = element.$('[class="ml-auto mx-1 my-2"]');
            console.log(Object.keys(socialAccounts));
        });
        // Click on item by text
        socialAccounts[socialAccountText].click();
    };
}
module.exports = new SettingsBrand();