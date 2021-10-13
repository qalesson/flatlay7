const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/Credentials.json");
const CampaignsPage = require("../../../page_objects/brands/campaign/campaigns-page");
const SettingsPage = require("../../../page_objects/brands/settings/settings-page")
const { expect } = require("chai");

const email = Credentials.brands.campaigns.email;
const password = Credentials.brands.campaigns.password;

describe("Dashboard - Brand", () => {
  beforeEach(function () {
    LoginPage.login({ email: email, password: password, portal: "brands" });
  });

  it("FL-61 Should be able to change start and end day of the draft campaign", () => {    
    // Choose the draft campaign
    CampaignsPage.$draftCampaignBtn.waitForDisplayed();
    CampaignsPage.$draftCampaignBtn.click();

    // Click on Edit campaign under the "Days left" section
    CampaignsPage.$editCampaignDateBtn.waitForDisplayed();
    CampaignsPage.$editCampaignDateBtn.click();

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
