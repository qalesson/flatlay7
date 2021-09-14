const LoginPage = require('../../../page_objects/login-page');
const dashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../data/credentials.json");

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it('Should get redirected to discover page upon click on discover FL-34', () => {
        dashboardBrandsPage.$discoverButton.waitForClickable();
        dashboardBrandsPage.$discoverButton.click();
        dashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
    });

    it('Should get redirected to campaigns page upon click on campaigns FL-35', () => {
        dashboardBrandsPage.$campaignsButton.waitForClickable()
        dashboardBrandsPage.$campaignsButton.click();
        dashboardBrandsPage.$campaignsNavigationBar.waitForDisplayed();
    });

    it('Should get redirected to saved page upon click on saved FL-**', () => {
        dashboardBrandsPage.$savedButton.waitForClickable();
        dashboardBrandsPage.$savedButton.click();
        dashboardBrandsPage.$createNewListLink.waitForDisplayed();
    });

    it('Should get redirected to home page upon click on home FL-**', () => {
        dashboardBrandsPage.$homeButton.waitForClickable();
        dashboardBrandsPage.$homeButton.click();
        dashboardBrandsPage.$currentUserName.waitForDisplayed();
    });
})