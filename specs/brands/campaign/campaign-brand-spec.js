const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/Credentials.json");
const CampaignsPage = require("../../../page_objects/brands/campaign/campaigns-page");
const SettingsPage = require("../../../page_objects/brands/settings/settings-page")
const { expect } = require("chai");

<<<<<<< HEAD
const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;
=======
const email = Credentials.brands.campaigns.email;
const password = Credentials.brands.campaigns.password;
>>>>>>> 1dcc6927cd639a836c5e1cfd1676ef8a43bbe85c

describe("Dashboard - Brand", () => {
  beforeEach(function () {
    LoginPage.login({ email: email, password: password, portal: "brands" });
  });

<<<<<<< HEAD
  it("FL-61 Should not be able to change start day of the published campaign", () => {
    // Click Campaigns menu btn
    DashboardBrandsPage.$campaignsButton.waitForDisplayed();
    DashboardBrandsPage.$campaignsButton.click();

    // Click on Active campaign
    CampaignsPage.$activeCampaignBtn.waitForDisplayed();
    CampaignsPage.$activeCampaignBtn.click();
=======
  it("FL-61 Should be able to change start and end day of the draft campaign", () => {    
    // Choose the draft campaign
    CampaignsPage.$draftCampaignBtn.waitForDisplayed();
    CampaignsPage.$draftCampaignBtn.click();
>>>>>>> 1dcc6927cd639a836c5e1cfd1676ef8a43bbe85c

    // Click on Edit campaign under the "Days left" section
    CampaignsPage.$editCampaignDateBtn.waitForDisplayed();
    CampaignsPage.$editCampaignDateBtn.click();

<<<<<<< HEAD
    // Verify that user is not able to change a start  day
    CampaignsPage.$publishedCampaignStartCalendar.waitForDisplayed();
    expect(CampaignsPage.$publishedCampaignStartCalendar.isClickable()).to.be.false;
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

    // Verify that user is not able to change a start  day
    CampaignsPage.$publishedCampaignStartCalendar.waitForDisplayed();
    expect(CampaignsPage.$publishedCampaignStartCalendar.isClickable()).to.be.false;
  });
});
=======
    // Choose campaign start day in the calendar
    CampaignsPage.$draftCampaignStartCalendar.waitForDisplayed();
    CampaignsPage.$draftCampaignStartCalendar.click();
    CampaignsPage.selectCurrentDate();

    // Choose campaign end day in the calendar
    CampaignsPage.$draftCampaignEndCalendar.click();
    CampaignsPage.selectTomorrowDate();

    // Save campaign dates
    CampaignsPage.$saveDateBtn.click();

    //Verify that dates have been changed
    CampaignsPage.$saveDateMsg.waitForDisplayed();
    expect(CampaignsPage.$saveDateMsg.getText()).to.equal(
      "Your campaign information has been successfully changed"
    );
  });
});
>>>>>>> 1dcc6927cd639a836c5e1cfd1676ef8a43bbe85c
