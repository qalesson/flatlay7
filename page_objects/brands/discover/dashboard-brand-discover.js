"use strict";
const { expect } = require('chai');
class DashboardBrandDiscover {
    get $sliderMax() { return $('[class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max"]'); }
    get $applyFiltersBtn() { return $('[class="btn btn-block btn-apply-filters mx-2"]'); }
    get $$creatorsData() { return $$('[class="header-title"]'); }
    get $$creatorsInfo() { return $$('[class="row discover-campaign-main-section p-3 align-center"]'); }
}
module.exports = new DashboardBrandDiscover();