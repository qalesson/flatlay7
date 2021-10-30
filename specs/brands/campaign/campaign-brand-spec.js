const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/Credentials.json");
const CampaignsPage = require("../../../page_objects/brands/campaign/campaigns-page");
const { expect } = require("chai");
const CampaignsApi = require("../../../api/brands/campaigns-api");
const faker = require('faker');

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

let token;

describe("Dashboard - Brand", () => {
  beforeEach(function () {
    token = LoginPage.login({ email: email, password: password, portal: "brands" });
  });

  it("FL-61 Should be able to change start and end day of the draft campaign", () => {    
    const randomName = faker.random.words(4);
    browser.call(async () => {
      // Create campaign using faker lbr for the campaign's name
      
      await CampaignsApi.createCampaign(randomName, token);
    });
    
    // Choose the api campaign
    $(`li=${randomName}`).waitForDisplayed();
    $(`li=${randomName}`).click();
    // CampaignsPage.navigateToApiCampaign(randomName);    

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
