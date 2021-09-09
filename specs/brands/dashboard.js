const LoginPage = require('../../page_objects/login-page')
const DashboardPage = require('../../page_objects/creators/dashboard-creators-page');
const DashboardPageBrands = require('../../page_objects/brands/dashboard-brands-page');
const expect = require('chai').expect;

describe('Dashboard - Brands', () => {
    it('User should be able to see 4 monthly plans on "Plans" page', () => {
        LoginPage.login({ email: 'qalesson@gmail.com', password: 'qalesson@gmail.com', portal: 'brands' });
        // DashboardPageBrands.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
        
        DashboardPageBrands.upgradeBtn.waitForDisplayed();
        DashboardPageBrands.upgradeBtn.click();
        let plan = DashboardPageBrands.pricingList.getText();
        expect(plan).to.contain('BASIC');
        expect(plan).to.contain('PRO');
        expect(plan).to.contain('PREMIUM');
        expect(plan).to.contain('ENTERPRISE');

    }),
    it('User should be able to see 4 yearly plans on "Plans" page', () => {
        LoginPage.login({ email: 'qalesson@gmail.com', password: 'qalesson@gmail.com', portal: 'brands' });
        // DashboardPageBrands.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
        
        DashboardPageBrands.upgradeBtn.waitForDisplayed();
        DashboardPageBrands.upgradeBtn.click();
        DashboardPageBrands.yearlyPlansBtn.waitForDisplayed();
        DashboardPageBrands.yearlyPlansBtn.click();

        let yearlyPlan = DashboardPageBrands.pricingList.getText();
        expect(yearlyPlan).to.contain('$1,000');
        expect(yearlyPlan).to.contain('$3,300');

    })
})