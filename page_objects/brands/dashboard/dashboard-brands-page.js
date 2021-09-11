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
    get $createCampaignButton () {return $("span=Create Campaign");}
}
module.exports = new DashboardBrand();