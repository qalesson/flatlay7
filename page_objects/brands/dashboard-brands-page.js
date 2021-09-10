"use strict";
class Dashboard {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $accountSettingsLnk() {return $('[routerlink="/creator/settings"]');}
    get $upgradeBtn() {return $('[alt="Upgrade"]');}
    get $pricingList() {return $('[class="row pricing-plan"]');}
    get $yearlyPlansBtn() {return $('[class="p-2 text-center"]');}
    get $premiumPlanTxt() {return $('[class="card-header pricing-prem-plan d-flex flex-row justify-content-between align-center"]');} 
}
module.exports = new Dashboard();