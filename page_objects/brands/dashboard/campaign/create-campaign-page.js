"use strict";
class CreateCampaingBrand {
    get $inputForCampaignName () {return $('[placeholder="0/75"]');}
    get $inputForCampaignStartDate () {return $$('[class="mat-datepicker-toggle-default-icon ng-star-inserted"]')[0];}
    get $inputForCampaignEndDate () {return $$('[class="mat-datepicker-toggle-default-icon ng-star-inserted"]')[1];}
    get $datePickerToday () { return $('[class="mat-calendar-body-cell-content mat-calendar-body-today"]');}
    get $nextStepButton () { return $(".next-step-button");}
    get $campaignContenFirstButton () { return $("p=Photo and Image");}
    get $directionOfContentTextArea () { return $("#DirectionOfContent");}
    get $campaignGoalsDropdownIcon () { return $('.ng-arrow-wrapper');}
    get $campaignGoalsDropdownFirstOption () { return $("strong=Content distribution");}
    get $campaignBriefTextAres () { return $('[placeholder="Campaign brief"]'); }
    get $addProductToPrometeButton () { return $("button=+ Add a product you want to promote"); }
    get $productToPromoteLinkInput () { return $('[placeholder="Paste or type a link to your product"]');}
    get $productToPromoteLinkAddButton () { return $("span=Add");}

   
}
module.exports = new CreateCampaingBrand();