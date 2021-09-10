const LoginPage = require('../../page_objects/login-page')
const DashboardPage = require('../../page_objects/creators/dashboard-creators-page');
const DashboardPageBrands = require('../../page_objects/brands/dashboard-brands-page');
const expect = require('chai').expect;

describe('Dashboard - Brands', () => {
    
    it('User should be able to see 4 yearly plans on "Plans" page', () => {
        LoginPage.login({ email: 'qalesson@gmail.com', password: 'qalesson@gmail.com', portal: 'brands' });
        
        DashboardPageBrands.$upgradeBtn.waitForDisplayed();
        DashboardPageBrands.$upgradeBtn.click();
        DashboardPageBrands.$yearlyPlansBtn.waitForDisplayed();
        DashboardPageBrands.$yearlyPlansBtn.click();

        let yearlyPlan = DashboardPageBrands.$pricingList.getText();
        expect(yearlyPlan).to.contain('$1,000');
        expect(yearlyPlan).to.contain('$3,300');
    })
})