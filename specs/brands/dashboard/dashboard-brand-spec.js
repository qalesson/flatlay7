const LoginPage = require('../../../page_objects/login-page');
const dashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');

describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: 'qalesson@gmail.com', password: 'qalesson@gmail.com', portal: 'brands' });
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

    it('Should get redirected to saved page upon click on saved FL-36', () => {
        dashboardBrandsPage.$savedButton.waitForClickable();
        dashboardBrandsPage.$savedButton.click();
        dashboardBrandsPage.$createNewListLink.waitForDisplayed();
    });

    it('Should get redirected to home page upon click on home FL-37', () => {
        dashboardBrandsPage.$homeButton.waitForClickable();
        dashboardBrandsPage.$homeButton.click();
        dashboardBrandsPage.$currentUserName.waitForDisplayed();
    });
})