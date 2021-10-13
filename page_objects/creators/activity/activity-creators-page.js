"use strict";
class ActivityPage {    
    get $activityBtn() {return $('span=Activity');}
    get $$activityMessages () {return $$('.content .name');}
}
module.exports = new ActivityPage();