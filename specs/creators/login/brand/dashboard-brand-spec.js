const LoginPage = require('../../../../page_objects/login-page');
const dashboardBrandsPage = require('../../../../page_objects/brands/dashboard-brands-page');

describe('Login - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: 'qalesson@gmail.com', password: 'qalesson@gmail.com', portal: 'brands' });
   
    });
    it('Should get redirected to discover page upon click on discover', () => {
        dashboardBrandsPage.$discoverButton.waitForClickable();
        dashboardBrandsPage.$discoverButton.click();
        dashboardBrandsPage.$confirmDiscoverPage.waitForDisplayed();
    });
    it('Should get redirected to campaigns page upon click on campaigns', () => {
        dashboardBrandsPage.$campaignsButton.click();
        dashboardBrandsPage.$confirmCampaignsPage.waitForDisplayed();
    });
    it('Should get redirected to saved page upon click on saved', () => {
        dashboardBrandsPage.$savedButton.click();
        dashboardBrandsPage.$confirmSavedPage.waitForDisplayed();
    });
    it('Should get redirected to home page upon click on home', () => {
        dashboardBrandsPage.$homeButton.click();
        dashboardBrandsPage.$confirmHomePage.waitForDisplayed();
    });
})