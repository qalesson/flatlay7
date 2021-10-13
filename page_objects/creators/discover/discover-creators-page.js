"use strict";
class DiscoverPage {    
    get $discoverBtn() {return $('[routerlink="discover"]');}
    get $$postsInfo () {return $$('.post-info');}
}
module.exports = new DiscoverPage();