"use strict";
class CampaingsBrand {
  get $ongoingCampaignSection() {return $('[class="card card-ongoing-campaign"]'); }
  get $ongoingCampaignTitle() {return $('[class="list-inline-item card-ongoing-campaign-title"]');}
}
module.exports = new CampaingsBrand();