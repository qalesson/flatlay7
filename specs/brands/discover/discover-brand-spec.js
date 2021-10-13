const LoginPage = require('../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../data/Credentials.json");
const DashboardBrandDiscover = require('../../../page_objects/brands/discover/dashboard-brand-discover');

const { expect } = require('chai');

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe('Discover - Brand', () => {
    beforeEach(function () {
        // Login to the Brands account
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it('Brand can filter creators by followers count FL-70', () => {
        DashboardBrandsPage.$discoverButton.waitForClickable();
        DashboardBrandsPage.$discoverButton.click();
        DashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
        DashboardBrandDiscover.$sliderMax.waitForClickable({timeout: 30000});
        DashboardBrandDiscover.$sliderMax.dragAndDrop({ x: -225, y: 0 })
        DashboardBrandDiscover.$applyFiltersBtn.click()
        browser.waitUntil(() => {
            return  DashboardBrandDiscover.$$creatorsData.map((elem) => elem.isDisplayed()).length > 5;
        }, { timeout: 10000, timeoutMsg:'5 users has not been displayed'});
        
        // Verify that each creator has less then 25k followers
        DashboardBrandDiscover.$$creatorsRows.forEach(element => {
            expect(Number(element.$('.justify-content-between :nth-child(1) .header-title').getText())).to.be.below(25000);
            console.log(Number(element.$('.justify-content-between :nth-child(1) .header-title').getText()));
        });  
        browser.debug();      
    });

    it.skip('FL-82 List of creators contains name/username, Followers label+amount, Following label+amount, Engagement label', () => {
        // Click on Discover btn
        DashboardBrandsPage.$discoverButton.waitForDisplayed();
        DashboardBrandsPage.$discoverButton.click();

        browser.waitUntil(() => {
            return DashboardBrandDiscover.$$creatorsRows.map((elem) => elem.isDisplayed()).length > 3;
        }, { timeout: 10000, timeoutMsg: 'At least 4 rows of creators have not been displayed' });
        
        // Verify that list of creators contains name/username
        DashboardBrandDiscover.$$creatorsRows.forEach((element) => {
        expect(element.$('[class="ml-1 link-item"] .header-title').getText().length).to.be.above(2);                   
        expect(element.$('[class="ml-1 link-item"] .content-title').getText().length).to.be.above(2);                   
        expect(element.$('.justify-content-between :nth-child(1) .header-title').getText().length).to.be.above(2);                   
        expect(element.$('.justify-content-between :nth-child(2) .header-title').getText().length).to.be.above(2);                   
        expect(element.$('.justify-content-between :nth-child(1) .content-title').getText().length).to.be.above(2);                   
        expect(element.$('.justify-content-between :nth-child(2) .content-title').getText().length).to.be.above(2);                   
        expect(element.$('.justify-content-between :nth-child(3) .content-title').getText().length).to.be.above(2);                   
        });        
    });
})