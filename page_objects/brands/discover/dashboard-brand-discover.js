"use strict";
class DashboardBrandDiscover {
    get $sliderMax() { return $('[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max"]'); }
    get $applyFiltersBtn() { return $('[class="btn btn-block btn-apply-filters mx-2"]'); }
    get $$creatorsData() { return $$('[class="header-title"]'); }
    get $$socialAccountsSidebar() { return $$('[class="col-sm-4 d-flex flex-row justify-content-between align-center"] [class="content-title"]'); }
    get $$socialAccountsSidebar1 () { return $$('[class="col-sm-4 d-flex flex-row justify-content-between align-center"] [class="header-title"]'); }
    get $$topMenu () { return $$('[class="col-sm-4 d-flex flex-row justify-content-between align-center"] [class="content-title"]');}
    get $$followersCount () { return $$('[class="col-sm-4 d-flex flex-row justify-content-between align-center"] [class="header-title"]');}

    verifyNameUsername(menuItemText) {
        const datas = {};
        browser.waitUntil(() => {
          return this.$$topMenu.map((elem) => elem.isDisplayed()).length > 2;
      }, { timeout: 10000, timeoutMsg:'Ten elements were not visible'});
        this.$$topMenu.forEach(element => {
           datas[element.getText()] = element;
           
        });
        datas[menuItemText].isDisplayed();
        if ( datas[menuItemText] === 'Engagement' )
        {
            expect(datas[menuItemText].length).to.be.above(3)
        } 
    }
}
module.exports = new DashboardBrandDiscover();