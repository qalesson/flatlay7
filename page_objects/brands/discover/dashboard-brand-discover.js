"use strict";
class DashboardBrandDiscover {
    get $sliderMax () { return $('[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max"]'); }
    get $applyFiltersBtn () { return $('[class="btn btn-block btn-apply-filters mx-2"]'); }
    get $$creatorsData () { return $$('[class="header-title"]'); }
    get $$creatorsRows () { return $$('.discover-campaign-main-section'); }   
    
}
module.exports = new DashboardBrandDiscover();