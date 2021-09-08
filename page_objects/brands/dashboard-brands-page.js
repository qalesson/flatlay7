"use strict";
class DashboardBrand {
    get $homeButton () {return $('[routerlink="/brand/home"]');}
    get $discoverButton () {return $('[routerlink="/brand/discover"]');}
    get $campaignsButton () {return $('[routerlink="/brand/campaign"]');}
    get $savedButton () {return $('[routerlink="/brand/saved"]');}
    get $confirmHomePage () {return $('[class="current-user-name"]');}
    get $confirmDiscoverPage () {return $('span=Discover creators by');}
    get $confirmCampaignsPage () {return $('[class="d-flex flex-row justify-content-around align-items-center m-3"]');}
    get $confirmSavedPage () {return $('[class="create-saved-list-button link-item"]');}
}
module.exports = new DashboardBrand();