"use strict";
class Dashboard {
    // Reusable selector getters that will help us to avoid selector duplicates
    get $accountSettingsLnk() {return $('[routerlink="/creator/settings"]');};
    get searchBtn() {return $('span=Search');};
}
module.exports = new Dashboard();