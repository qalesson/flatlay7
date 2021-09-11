const LoginPage = require("../../../../page_objects/login-page");
const dashboardBrandsPage = require("../../../../page_objects/brands/dashboard/dashboard-brands-page");
const Credentials = require("../../../../data/credentials.json");
const createCampaignPage = require("../../../../page_objects/brands/dashboard/campaign/create-campaign-page")

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

const campaignName = "Test Campaign Name for Test Case FL-32"

describe("Dashboard - Brand", () => {
  beforeEach(function () {
    LoginPage.login({ email: email, password: password, portal: "brands" });
  });

  it.only("Should be able to create campaign FL-32", () => {
    dashboardBrandsPage.$createCampaignButton.waitForClickable();
    dashboardBrandsPage.$createCampaignButton.click()
    createCampaignPage.$inputForCampaignName.waitForClickable()
    createCampaignPage.$inputForCampaignName.setValue(campaignName);

    browser.debug()
  });

  it("Should not be able to create campaign with past date FL-33", () => {
    
  });

});