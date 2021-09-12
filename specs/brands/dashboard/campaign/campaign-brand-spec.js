const LoginPage = require("../../../../page_objects/login-page");
const dashboardBrandsPage = require("../../../../page_objects/brands/dashboard/dashboard-brands-page");
const Credentials = require("../../../../data/credentials.json");
const createCampaignPage = require("../../../../page_objects/brands/dashboard/campaign/create-campaign-page")

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

const campaignName = "Test Campaign Name for Test Case FL-32"
const campaignDirextionTxt = "Test Campaign direction text for Test Case FL-32"
const campaignBriefTxt = "Test Campaign brief text for Test Case FL-32";
const campaignProductToPromoteLink = "https://webdriver.io/";

const date = new Date()
const today = date.toLocaleDateString("en-US");

describe("Dashboard - Brand", () => {
  beforeEach(function () {
    LoginPage.login({ email: email, password: password, portal: "brands" });
  });

  it.only("Should be able to create campaign FL-32", () => {

    dashboardBrandsPage.$createCampaignButton.waitForClickable();
    dashboardBrandsPage.$createCampaignButton.click()
    //Creating Campaign 
    //step 1/9
    createCampaignPage.$inputForCampaignName.waitForClickable()
    createCampaignPage.$inputForCampaignName.setValue(campaignName);
    createCampaignPage.$inputForCampaignStartDate.click()
    createCampaignPage.$datePickerToday.click()
    createCampaignPage.$inputForCampaignEndDate.click();
    createCampaignPage.$datePickerToday.click();
    createCampaignPage.$nextStepButton.click()
    //step 2/9
    createCampaignPage.$campaignContenFirstButton.waitForClickable();
    createCampaignPage.$campaignContenFirstButton.click()
    createCampaignPage.$nextStepButton.click();
    //step 3/9
    createCampaignPage.$directionOfContentTextArea.setValue(campaignDirextionTxt)
    createCampaignPage.$nextStepButton.click();
    //step 4/9
    createCampaignPage.$campaignGoalsDropdownIcon.click()
    createCampaignPage.$campaignGoalsDropdownFirstOption.click()
    createCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    createCampaignPage.$nextStepButton.click();
    //step 5/9
    createCampaignPage.$addProductToPrometeButton.click()
    createCampaignPage.$productToPromoteLinkInput.setValue(campaignProductToPromoteLink)
    createCampaignPage.$productToPromoteLinkAddButton.click()
    createCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    createCampaignPage.$nextStepButton.click();
    //step 6/9




    browser.debug();
  });

  it("Should not be able to create campaign with past date FL-33", () => {
    
  });

});