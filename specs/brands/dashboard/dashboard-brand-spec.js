const LoginPage = require('../../../page_objects/login-page');
const dashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../data/credentials.json");

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it('FL-34', () => {
        dashboardBrandsPage.$discoverButton.waitForClickable();
        dashboardBrandsPage.$discoverButton.click();
        dashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
    });

    it('FL-35', () => {
        dashboardBrandsPage.$campaignsButton.waitForClickable()
        dashboardBrandsPage.$campaignsButton.click();
        dashboardBrandsPage.$campaignsNavigationBar.waitForDisplayed();
    });

    it('FL-68', () => {
        dashboardBrandsPage.$savedButton.waitForClickable();
        dashboardBrandsPage.$savedButton.click();
        dashboardBrandsPage.$createNewListLink.waitForDisplayed();
    });

    it('FL-69', () => {
        dashboardBrandsPage.$homeButton.waitForClickable();
        dashboardBrandsPage.$homeButton.click();
        dashboardBrandsPage.$currentUserName.waitForDisplayed();
    });
})