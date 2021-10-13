"use strict";
class DashboardCreatorsCampaigns {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $campaignsNavBotton() {return $('[routerlink="campaigns"]');};
    get $campaignsSearchBox() {return $('[placeholder="Search for campaigns"]');};
    get $campaignsSearchResult() {return $('span=You are the best');}
    get $campaignsSearchResultEmpty() {return $('p=No active campaigns');}
}
module.exports = new DashboardCreatorsCampaigns();