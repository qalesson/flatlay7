class SideBar {             
    get $$creatorsFollowBtn() { return $$('.text-nowrap');}
    get $$creatorsNamesLbl() {return $$('[_ngcontent-serverapp-c9].name');}
    get $$creatorsFollowersLbl() {return $$('[_ngcontent-serverapp-c9].status');}
    get $$communitiesFollowBtn() {return $$('button[_ngcontent-serverapp-c10]');}
    get $$communitiesNamesLbl() {return $$('[_ngcontent-serverapp-c10].name');}
}
module.exports = new SideBar();