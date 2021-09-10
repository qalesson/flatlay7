"use strict";
class DashboardBrand {
    get $homeButton () {return $('[routerlink="/brand/home"]');}
    get $discoverButton () {return $('[routerlink="/brand/discover"]');}
    get $campaignsButton () {return $('[routerlink="/brand/campaign"]');}
    get $savedButton () {return $('[routerlink="/brand/saved"]');}
    get $currentUserName () {return $('[class="current-user-name"]');}
    get $discoverCreatorsByLink () {return $('span=Discover creators by');}
    get $campaignsNavigationBar () {return $('[class="d-flex flex-row justify-content-around align-items-center m-3"]');}
    get $createNewListLink () {return $('[class="create-saved-list-button link-item"]');}
    get $accountSettingsLnk() {return $('[routerlink="/creator/settings"]');}
    get $upgradeBtn() {return $('[alt="Upgrade"]');}
    get $pricingList() {return $('[class="row pricing-plan"]');}
    get $yearlyPlansBtn() {return $('[class="p-2 text-center"]');}
    get $premiumPlanTxt() {return $('[class="card-header pricing-prem-plan d-flex flex-row justify-content-between align-center"]');} 
}
module.exports = new DashboardBrand();