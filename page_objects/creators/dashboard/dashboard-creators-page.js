"use strict";
class Dashboard {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $accountSettingsLnk() {return $('[routerlink="/creator/settings"]');};
    get $searchBtn() {return $('span=Search');};
    get $viewPublicProfileBtn() {return $('[class="top-main"] div:nth-child(2)');};
    get $collectionsBtn() {return $('[class="item d-flex align-items-end"]');};
    get $noPostsTxt() {return $('span=There are no posts here yet');};
    get $noCollectionsTxt() {return $('span=There are no collections here yet');};
    get $landingHeader() {return $('[id="landingHeader"]');};
    get $$numberOfPosts() {return $$('[class="m-0 amount font-gt"]');};

    switchToOpenTab(mainTab) {
        browser.waitUntil(() => browser.getWindowHandles().length > 1);
        const popupWindow = browser.getWindowHandles().filter((handle) => handle !== mainTab)[1];
        browser.switchToWindow(popupWindow);
    };
}
module.exports = new Dashboard();
