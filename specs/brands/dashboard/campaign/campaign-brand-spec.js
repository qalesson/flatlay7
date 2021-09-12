const LoginPage = require("../../../../page_objects/login-page");
const dashboardBrandsPage = require("../../../../page_objects/brands/dashboard/dashboard-brands-page");
const Credentials = require("../../../../data/credentials.json");
const createCampaignPage = require("../../../../page_objects/brands/dashboard/campaign/create-campaign-page")
const campaignsPage = require("../../../../page_objects/brands/dashboard/campaign/campaigns-page")

const assert = require("chai").assert;

describe("Dashboard - Brand", () => {

  const email = Credentials.brands.login.email;
  const password = Credentials.brands.login.password;
  const campaignName = "Test Campaign Name for Test Case FL-32"
  const campaignDirextionTxt = "Test Campaign direction text for Test Case FL-32"
  const campaignBriefTxt = "Test Campaign brief text for Test Case FL-32";
  const campaignProductToPromoteLink = "https://webdriver.io/";
  const date = new Date()
  const today = date.toLocaleDateString("en-US");

  beforeEach(function () {
    LoginPage.login({ email: email, password: password, portal: "brands" });
  });

  const waitAndClickOnNextStepButton = () => {
    createCampaignPage.$nextStepButton.waitForClickable();
    browser.pause(3000);
    createCampaignPage.$nextStepButton.click();
  }

  it.skip("Should be able to create campaign FL-32", () => {
    dashboardBrandsPage.$createCampaignButton.waitForClickable({timeout: 10000});
    dashboardBrandsPage.$createCampaignButton.click();
    //Creating Campaign
    //step 1/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$inputForCampaignName.waitForClickable();
    createCampaignPage.$inputForCampaignName.setValue(campaignName);
    createCampaignPage.$inputForCampaignStartDate.click();
    createCampaignPage.$datePickerToday.click();
    createCampaignPage.$inputForCampaignEndDate.click();
    createCampaignPage.$datePickerToday.click();
    waitAndClickOnNextStepButton();
    
    //step 2/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$campaignContenFirstButton.waitForClickable();
    createCampaignPage.$campaignContenFirstButton.click();
    waitAndClickOnNextStepButton();
    //step 3/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$directionOfContentTextArea.setValue(
      campaignDirextionTxt
    );
    waitAndClickOnNextStepButton();
    //step 4/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$campaignGoalsDropdownIcon.click();
    createCampaignPage.$campaignGoalsDropdownFirstOption.click();
    createCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    waitAndClickOnNextStepButton();
    //step 5/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$addProductToPrometeButton.waitForClickable();
    createCampaignPage.$addProductToPrometeButton.click();
    createCampaignPage.$productToPromoteLinkInput.setValue(
      campaignProductToPromoteLink
    );
    createCampaignPage.$productToPromoteLinkAddButton.click();
    createCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    waitAndClickOnNextStepButton();
    //step 6/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$campaignPayOptionCheckbox.click();
    waitAndClickOnNextStepButton();
    //step 7/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$listOfPaymentOfContentTypeInputs.forEach((el) => {
      el.setValue(Math.floor(Math.random() * 10));
    });
    waitAndClickOnNextStepButton();
    //step 8/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$flatlayTermsSectionTitle.waitForDisplayed();
    waitAndClickOnNextStepButton();
    //step 9/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$lastCreateCampaignSectionTitle.waitForDisplayed();
    createCampaignPage.$goToMyCampaignButton.waitForClickable();
    createCampaignPage.$goToMyCampaignButton.click();
    //verifying that campaign with given campaign name (const campaignName) was created
    browser.pause(10000)
    campaignsPage.$ongoingCampaignSection.waitForDisplayed({ timeout: 20000 });
    campaignsPage.$ongoingCampaignTitle.waitForDisplayed({ timeout: 20000 });
    
    assert.equal(
      campaignsPage.$ongoingCampaignTitle.getText(),
      campaignName,
      `Created campaign with name ${campaignName} dosent exist in campaign listing`
    );

    
  });

  it("Should not be able to create campaign with past date FL-33", () => {
    dashboardBrandsPage.$createCampaignButton.waitForClickable({
      timeout: 10000,
    });
    dashboardBrandsPage.$createCampaignButton.click();
    //Creating Campaign
    //step 1/9
    createCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    createCampaignPage.$inputForCampaignName.waitForClickable();
    createCampaignPage.$inputForCampaignName.setValue(campaignName);
    createCampaignPage.$inputForCampaignStartDate.click();
    const dayBefore = (createCampaignPage.$datePickerToday.getText() - 1) ;
    
    assert.equal(
      $(`div=${dayBefore}`).isClickable(),
      false,
      "date of the previous day is not clickable"
    );
    
  });

});