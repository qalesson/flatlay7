// for https://new.flatlay.io/brand/settings page
"use strict";
class BrandDashboardSettings {

  get $$socialNetworkTitle() { return $$('[class="mx-1 my-2 section-title"]');} 
  get $$connectSocialNetworkButton() { return $$("span=Connect"); }

  clickConnectButtonbyName(name) {
    let sosialNetworks = [];

    this.$$socialNetworkTitle.forEach((el) => {
      sosialNetworks.push(el.getText());
    });

    let sosialNetworkIndex = sosialNetworks.indexOf(name);

    if (
      this.$$socialNetworkTitle[sosialNetworkIndex].getText() ===
      "Pinterest"
    ) {
      console.log('We dont support "Pinterest" at this time');
    } else if (
      this.$$socialNetworkTitle[sosialNetworkIndex].getText() ===
      name
    ) {
      //browser.debug();
      $$connectSocialNetworkButton[sosialNetworkIndex].click();
    }
  }
}
module.exports = new BrandDashboardSettings();
