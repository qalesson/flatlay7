const LoginPage = require("../../../../page_objects/login-page");
const DashboardBrandsPage = require("../../../../page_objects/brands/dashboard/dashboard-brands-page");
const Credentials = require("../../../../data/Credentials.json");
const CreateCampaignPage = require("../../../../page_objects/brands/dashboard/campaign/create-campaign-page")
const CampaignsPage = require("../../../../page_objects/brands/dashboard/campaign/campaigns-page")

const assert = require("chai").assert;
const expect = require("chai").expect;
const faker = require("faker")

describe("Dashboard - Brand", () => {
  const email = Credentials.brands.login.email;
  const password = Credentials.brands.login.password;
  const campaignName = `Test Campaign ${faker.random.word()} for Test Case FL-32 (demo)`
  const editedCampaignName = `Test Campaign ${faker.random.word()} for Test Case FL-32 EDITED (demo)`;
  const campaignDirextionTxt = `Test Campaign direction ${faker.random.words()} for Test Case FL-32 (demo)`
  const campaignBriefTxt = "Test Campaign brief text for Test Case FL-32";
  const campaignProductToPromoteLink = "https://webdriver.io/";
  const date = new Date()
  const today = date.toLocaleDateString("en-US");

  beforeEach(function () {
    LoginPage.login({ email: email, password: password, portal: "brands" });
  });
 
  it("FL-32 Should be able to create campaign", () => {
    browser.waitUntil(() => {
      return DashboardBrandsPage.$createCampaignButton.isDisplayed();
    }, { timeout: 20000, timeoutMsg:'Button "Create Campaign" did not show up after 10 seconds'});
    DashboardBrandsPage.$createCampaignButton.click();
    //Creating Campaign step 1/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$inputForCampaignName.waitForClickable();
    CreateCampaignPage.$inputForCampaignName.setValue(campaignName);
    CreateCampaignPage.$$inputForCampaignStartDate.click();
    CreateCampaignPage.$datePickerToday.click();
    CreateCampaignPage.$$inputForCampaignEndDate.click();
    CreateCampaignPage.$datePickerToday.click();
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign step 2/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$campaignContenFirstButton.waitForClickable();
    CreateCampaignPage.$campaignContenFirstButton.click();
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign step 3/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$directionOfContentTextArea.setValue(
      campaignDirextionTxt
    );
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign step 4/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$campaignGoalsDropdownIcon.click();
    CreateCampaignPage.$campaignGoalsDropdownFirstOption.click();
    CreateCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign 5/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$addProductToPrometeButton.waitForClickable();
    CreateCampaignPage.$addProductToPrometeButton.click();
    CreateCampaignPage.$productToPromoteLinkInput.setValue(
      campaignProductToPromoteLink
    );
    CreateCampaignPage.$productToPromoteLinkAddButton.click();
    CreateCampaignPage.$campaignBriefTextAres.setValue(campaignBriefTxt);
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign step 6/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$campaignPayOptionCheckbox.click();
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign step 7/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$$listOfPaymentOfContentTypeInputs.forEach((el) => {
      el.setValue(Math.floor(Math.random() * 10));
    });
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign step 8/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$flatlayTermsSectionTitle.waitForDisplayed();
    CreateCampaignPage.waitAndClickOnNextStepButton();
    //Creating Campaign step 9/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$lastCreateCampaignSectionTitle.waitForDisplayed();
    CreateCampaignPage.$saveCampaignButton.click();
    CreateCampaignPage.$goToMyCampaignButton.waitForClickable();
    CreateCampaignPage.$goToMyCampaignButton.click();
    //verifying that campaign with given campaign name (const campaignName) was created
    browser.pause(20000);
    CampaignsPage.$ongoingCampaignSection.waitForDisplayed({ timeout: 20000 });
    CampaignsPage.$ongoingCampaignTitle.waitForDisplayed({ timeout: 20000 });

    assert.equal(
      CampaignsPage.$ongoingCampaignTitle.getText(),
      campaignName,
      `Created campaign with name ${campaignName} dosent exist in campaign listing`
    );
  });

  it("FL-33 Should not be able to create campaign with past date ", () => {
    DashboardBrandsPage.$createCampaignButton.waitForClickable({
      timeout: 20000,
    });
    DashboardBrandsPage.$createCampaignButton.click();
    //Creating Campaign step 1/9
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$inputForCampaignName.waitForClickable();
    CreateCampaignPage.$inputForCampaignName.setValue(campaignName);
    CreateCampaignPage.$$inputForCampaignStartDate.click();
    const dayBefore = CreateCampaignPage.$datePickerToday.getText() - 1;
    assert.equal(
      $(`div=${dayBefore}`).isClickable(),
      false,
      "date of the previous day is not clickable"
    );
  });

  it("FL-45 Should be able to edit campaign", () => {
    DashboardBrandsPage.$MainMenuCampaignsLink.waitForClickable();
    DashboardBrandsPage.$MainMenuCampaignsLink.click();
    CampaignsPage.$sideCampaignListCampaignName.click();
    CampaignsPage.$threeDotsIcon.click();
    CampaignsPage.$CampaignEditButton.click();
    CreateCampaignPage.$campaignCreateFormActiveSection.waitForDisplayed();
    CreateCampaignPage.$inputForCampaignName.waitForClickable();
    CreateCampaignPage.$inputForCampaignName.setValue(editedCampaignName);
    CreateCampaignPage.waitAndClickOnNextStepButton();
    CreateCampaignPage.$saveCampaignButton.click();
    CreateCampaignPage.$closeIcon.click();
    CampaignsPage.$sideCampaignListCampaignName.waitForDisplayed();
    CampaignsPage.$sideCampaignListCampaignName.click();
    const actualEditedCampaignName =
      CampaignsPage.$sideCampaignListCampaignName.getText();
    expect(actualEditedCampaignName).to.contain("EDITED");
  });
});