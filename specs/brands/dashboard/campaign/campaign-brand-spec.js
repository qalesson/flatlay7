const LoginPage = require("../../../../page_objects/login-page");
const dashboardBrandsPage = require("../../../../page_objects/brands/dashboard/dashboard-brands-page");
const Credentials = require("../../../../data/credentials.json");

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe("Dashboard - Brand", () => {
  beforeEach(function () {
    LoginPage.login({ email: email, password: password, portal: "brands" });
  });

  it.only("Should be able to create campaign FL-32", () => {
    dashboardBrandsPage.$createCampaignButton.waitForClickable();
  });

  it("Should not be able to create campaign with past date FL-33", () => {
    // dashboardBrandsPage.$campaignsButton.waitForClickable();
    // dashboardBrandsPage.$campaignsButton.click();
    // dashboardBrandsPage.$campaignsNavigationBar.waitForDisplayed();
  });

});