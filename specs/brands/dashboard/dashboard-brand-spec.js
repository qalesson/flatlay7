const LoginPage = require('../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../page_objects/brands/dashboard/Dashboard-brands-page');
const Credentials = require("../../../data/credentials.json");

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it('FL-34', () => {
        DashboardBrandsPage.$discoverButton.waitForClickable();
        DashboardBrandsPage.$discoverButton.click();
        DashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
    });

    it('FL-35', () => {
        DashboardBrandsPage.$campaignsButton.waitForClickable()
        DashboardBrandsPage.$campaignsButton.click();
        DashboardBrandsPage.$campaignsNavigationBar.waitForDisplayed();
    });

    it('FL-68', () => {
        DashboardBrandsPage.$savedButton.waitForClickable();
        DashboardBrandsPage.$savedButton.click();
        DashboardBrandsPage.$createNewListLink.waitForDisplayed();
    });

    it('FL-69', () => {
        DashboardBrandsPage.$homeButton.waitForClickable();
        DashboardBrandsPage.$homeButton.click();
        DashboardBrandsPage.$currentUserName.waitForDisplayed();
    });
})