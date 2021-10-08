"use strict";
class CampaignsBrand {  
  get $$campaignStatusLbl() {return $$('.campaign-status');}
  get $activeCampaignBtn () {return $('.status-icon-active');}
  get $editCampaignDateBtn () {return $('[class="row w-100 p-2"] div:nth-child(1) .text-dark-green');}
  get $draftCampaignStartCalendar () {return $('//*[@formcontrolname="startdate"]/../following-sibling::div');}
  get $draftCampaignEndCalendar () {return $('//*[@formcontrolname="enddate"]/../following-sibling::div');}
  get $chooseDateBtn () {return $('[aria-label="Choose month and year"]');}
  get $currentDateBtn () {return $('.mat-calendar-body-today');}
  get $tomorrowDateBtn () {return $('//*[@class="mat-calendar-body-cell-content mat-calendar-body-today"]/../following-sibling::td');}
  get $saveDateBtn () {return $('.btn-save');}
  get $saveDateMsg () {return $('[role="alertdialog"]');}

  selectCurrentDate() {
    this.$chooseDateBtn.waitForDisplayed();
    this.$chooseDateBtn.click();
    this.$currentDateBtn.waitForDisplayed();
    this.$currentDateBtn.click();
    this.$currentDateBtn.waitForDisplayed();
    this.$currentDateBtn.click();
    this.$currentDateBtn.waitForDisplayed();
    this.$currentDateBtn.click();
  };

  selectTomorrowDate() {
    this.$chooseDateBtn.waitForDisplayed();
    this.$chooseDateBtn.click();
    this.$currentDateBtn.waitForDisplayed();
    this.$currentDateBtn.click();
    this.$currentDateBtn.waitForDisplayed();
    this.$currentDateBtn.click();
    this.$tomorrowDateBtn.waitForDisplayed();
    this.$tomorrowDateBtn.click();
  };

}

module.exports = new CampaignsBrand(); 