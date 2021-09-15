"use strict";
class DashboardBrandDiscover {
    get $sliderMax () { return $('[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max"]'); }
    get $applyFiltersBtn () { return $('[class="btn btn-block btn-apply-filters mx-2"]'); }
    get $$creatorsData () { return $$('[class="header-title"]'); }
}
module.exports = new DashboardBrandDiscover();