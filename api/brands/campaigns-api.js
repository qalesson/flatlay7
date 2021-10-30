"use strict";
const axios = require('axios');
const baseApi = "https://api.flatlay.io";


class CampaignsBrandsApi {
get $selectorForToken() {return $(".brand-layout");} 

    async createCampaign(campaignName, token) {
        const body = {
            "photos": [], "product": false, "isPublic": true,
            "postrequirements": { "type": "string", "hashtags": [], "socialhandle": [] },
            "lastSavedStepNumber": 9, "autoApproveSubmissions": true, "productURL": [],
            "title": campaignName,
            "startdate": "2021-10-30T13:00:00.000Z", "enddate": "2021-10-31T13:00:00.000Z",
            "social": [], "contentLookingFor": ["ProductReview"],
            "directionOfContent": "QA API campaign", "goal": "feedback", "briefdescription": "",
            "paidType": "No additional compensation", "username": "qalesson-at-gmail.com",
            "merchantid": "29952", "type": "open"
        }
        const campaign = await axios.post(baseApi + '/campaign', body, { headers: { authorization: token } });

        return campaign;
    }
}
module.exports = new CampaignsBrandsApi();