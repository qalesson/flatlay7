"use strict";
class Dashboard {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $accountSettingsLnk() {return $('[routerlink="/creator/settings"]');}
    get upgradeBtn() {return $('[alt="Upgrade"]');}
    get pricingList() {return $('[class="row pricing-plan"]');}
    
}
module.exports = new Dashboard();