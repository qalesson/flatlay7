"use strict";
class CreateCampaingBrand {
    get $inputForCampaignName () {return $('[placeholder="0/75"]');}
    get $inputForCampaignStartDate () {return $$('[class="mat-datepicker-toggle-default-icon ng-star-inserted"]')[0];}
    get $inputForCampaignEndDate () {return $$('[class="mat-datepicker-toggle-default-icon ng-star-inserted"]')[1];}
    get $datePickerToday () { return $('[class="mat-calendar-body-cell-content mat-calendar-body-today"]');}
    get $nextStepButton () { return $(".next-step-button");}
}
module.exports = new CreateCampaingBrand();