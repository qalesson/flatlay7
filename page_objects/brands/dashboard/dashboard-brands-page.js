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
    get $$basicEnterprisePlanLbl() {return $$('[class="col-sm-6 col-xs-12 p-2 col-md-3 ng-star-inserted"]');}
    get $$proPremiumPlanLbl() {return $$('[class="col-sm-6 col-xs-12 p-2 col-md-3"]');}
    get $$plansLbl() {return $$('.col-sm-6.col-xs-12');}
}
module.exports = new DashboardBrand();