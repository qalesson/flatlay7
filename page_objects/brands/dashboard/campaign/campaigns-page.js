"use strict";
class CampaingsBrand {
  get $ongoingCampaignSection() {return $('[class="card card-ongoing-campaign"]'); }
  get $ongoingCampaignTitle() {return $('[class="list-inline-item card-ongoing-campaign-title"]');}
  get $CampaignEditButton() { return $("button=Edit campaign");}
  get $threeDotsIcon() { return $('[class="list-inline-item actions-more"]');}
  get $sideCampaignListCampaignName() { return $('[class="d-flex flex-row m-3 p-2 filtered-campaign ng-star-inserted"]')}
}
module.exports = new CampaingsBrand();