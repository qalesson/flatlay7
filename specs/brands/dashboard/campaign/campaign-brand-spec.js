const LoginPage = require("../../../../page_objects/login-page");
const DashboardBrandsPage = require("../../../../page_objects/brands/dashboard/dashboard-brands-page");
const Credentials = require("../../../../data/credentials.json");
const CreateCampaignPage = require("../../../../page_objects/brands/dashboard/campaign/create-campaign-page")
const CampaignsPage = require("../../../../page_objects/brands/dashboard/campaign/campaigns-page")

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
    CreateCampaignPage.$nextStepButton.waitForClickable({ timeout: 5000 });
    CreateCampaignPage.$nextStepButton.click();
  }

  it("Should be able to create campaign FL-32", () => {
    DashboardBrandsPage.$createCampaignButton.waitForClickable({timeout: 10000});
    DashboardBrandsPage.$createCampaignButton.click();
    //Creating Campaign step 1/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$inputForCampaignName.waitForClickable();
    CreateCampaignPage.$inputForCampaignName.setValue(campaignName);
    CreateCampaignPage.$$inputForCampaignStartDate.click();
    CreateCampaignPage.$datePickerToday.click();
    CreateCampaignPage.$$inputForCampaignEndDate.click();
    CreateCampaignPage.$datePickerToday.click();
    waitAndClickOnNextStepButton();
    
    //step 2/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$campaignContenFirstButton.waitForClickable();
    CreateCampaignPage.$campaignContenFirstButton.click();
    waitAndClickOnNextStepButton();
    //step 3/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$directionOfContentTextArea.setValue(
      campaignDirextionTxt
    );
    waitAndClickOnNextStepButton();
    //step 4/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$campaignGoalsDropdownIcon.click();
    CreateCampaignPage.$campaignGoalsDropdownFirstOption.click();
    CreateCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    waitAndClickOnNextStepButton();
    //step 5/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$addProductToPrometeButton.waitForClickable();
    CreateCampaignPage.$addProductToPrometeButton.click();
    CreateCampaignPage.$productToPromoteLinkInput.setValue(
      campaignProductToPromoteLink
    );
    CreateCampaignPage.$productToPromoteLinkAddButton.click();
    CreateCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    waitAndClickOnNextStepButton();
    //step 6/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$campaignPayOptionCheckbox.click();
    waitAndClickOnNextStepButton();
    //step 7/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$$listOfPaymentOfContentTypeInputs.forEach((el) => {
      el.setValue(Math.floor(Math.random() * 10));
    });
    waitAndClickOnNextStepButton();
    //step 8/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$flatlayTermsSectionTitle.waitForDisplayed();
    waitAndClickOnNextStepButton();
    //step 9/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$lastCreateCampaignSectionTitle.waitForDisplayed();
    CreateCampaignPage.$goToMyCampaignButton.waitForClickable();
    CreateCampaignPage.$goToMyCampaignButton.click();
    //verifying that campaign with given campaign name (const campaignName) was created
    browser.pause(10000)
    CampaignsPage.$ongoingCampaignSection.waitForDisplayed({ timeout: 20000 });
    CampaignsPage.$ongoingCampaignTitle.waitForDisplayed({ timeout: 20000 });
    
    assert.equal(
      CampaignsPage.$ongoingCampaignTitle.getText(),
      campaignName,
      `Created campaign with name ${campaignName} dosent exist in campaign listing`
    );
  });

  it("Should not be able to create campaign with past date FL-33", () => {
    DashboardBrandsPage.$createCampaignButton.waitForClickable({
      timeout: 10000,
    });
    DashboardBrandsPage.$createCampaignButton.click();
    //Creating Campaign step 1/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$inputForCampaignName.waitForClickable();
    CreateCampaignPage.$inputForCampaignName.setValue(campaignName);
    CreateCampaignPage.$$inputForCampaignStartDate.click();
    const dayBefore = (CreateCampaignPage.$datePickerToday.getText() - 1) ;
    
    assert.equal( $(`div=${dayBefore}`).isClickable(), false, "date of the previous day is not clickable");
  });
});