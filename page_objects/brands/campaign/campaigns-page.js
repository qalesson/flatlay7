"use strict";
class CampaignsBrand {  
  get $$campaignStatusLbl() {return $$('.campaign-status');}
  get $activeCampaignBtn () {return $('.status-icon-active');}
  get $editCampaignDateBtn () {return $('[class="row w-100 p-2"] div:nth-child(1) .text-dark-green');}
  get $publishedCampaignStartCalendar () {return $('[disabled="true"]');}
}
module.exports = new CampaignsBrand(); 