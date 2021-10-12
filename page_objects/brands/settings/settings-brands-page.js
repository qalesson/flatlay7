"use strict";
class SettingsBrand {
    get $$socialAccountsSidebar() { return $$('[class="d-flex flex-row social-item"]'); }
    get $$socialAccountsConnectBtn() { return $('[class="ml-auto mx-1 my-2"]'); }
    get $$socialMediaName() { return $('[class="mx-1 my-2 section-title"]'); }

    connectSocialMedia(mediaName) {
        const socialMedias = {};
        this.$$socialAccountsSidebar.forEach(element => {
            socialMedias[element.$('[class="mx-1 my-2 section-title"]').getText()] = element.$('[class="ml-auto mx-1 my-2"]');
        });
        socialMedias[mediaName].click();
    }
}
module.exports = new SettingsBrand();