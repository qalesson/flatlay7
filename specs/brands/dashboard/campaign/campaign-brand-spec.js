const LoginPage = require("../../../../page_objects/login-page");
const DashboardBrandsPage = require("../../../../page_objects/brands/dashboard/dashboard-brands-page");
const Credentials = require("../../../../data/credentials.json");
const CampaignsPage = require("../../../../page_objects/brands/dashboard/campaign/campaigns-page");
const { expect } = require("chai");

    const email = Credentials.brands.login.email;
    const password = Credentials.brands.login.password;

describe("Dashboard - Brand", () => {
  
    beforeEach(function () {
      LoginPage.login({ email: email, password: password, portal: "brands" });
    });

    it("FL-61 Should not be able to change start day of the published campaign", () => {
        // Click Campaigns menu btn
       DashboardBrandsPage.$campaignsButton.waitForDisplayed();
       DashboardBrandsPage.$campaignsButton.click();

       // Click on Active campaign
       CampaignsPage.$activeCampaignBtn.waitForDisplayed();
       CampaignsPage.$activeCampaignBtn.click();
       
       // Click on Edit campaign under the "Days left" section
       CampaignsPage.$editCampaignDateBtn.waitForDisplayed();
       CampaignsPage.$editCampaignDateBtn.click();       

       // Verify that user is not able to change a start day
       CampaignsPage.$publishedCampaignStartCalendar.waitForDisplayed();
       expect(CampaignsPage.$publishedCampaignStartCalendar.isClickable()).to.be.false;
      });
    });