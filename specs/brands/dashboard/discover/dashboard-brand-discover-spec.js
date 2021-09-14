const LoginPage = require('../../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../../data/Credentials.json");
const { expect } = require('chai');
const DashboardBrandDiscover = require('../../../../page_objects/brands/dashboard/discover/Dashboard-brand-discover');

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it.only('FL-70', () => {
        DashboardBrandsPage.$discoverButton.waitForClickable();
        DashboardBrandsPage.$discoverButton.click();
        DashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
        DashboardBrandDiscover.$sliderMax.waitForClickable()
        DashboardBrandDiscover.$sliderMax.dragAndDrop({ x: -225, y: 0 })
        DashboardBrandDiscover.$applyFiltersBtn.click()
        browser.waitUntil(() => {
            return  DashboardBrandDiscover.$$creatorsData.map((elem) => elem.isDisplayed()).length > 5;
        }, { timeout: 10000, timeoutMsg:'5 users has not been displayed'});
        const creatorName = [];
        DashboardBrandDiscover.$$creatorsData.forEach(element => {
            creatorName.push(element.getText().toLowerCase());
        });
        expect(parseInt(creatorName[1])).to.be.below(25);
        expect(parseInt(creatorName[5])).to.be.below(25);
        expect(parseInt(creatorName[9])).to.be.below(25);
        expect(parseInt(creatorName[13])).to.be.below(25);
        expect(parseInt(creatorName[17])).to.be.below(25);
        expect(parseInt(creatorName[21])).to.be.below(25);
        expect(parseInt(creatorName[25])).to.be.below(25);
        expect(parseInt(creatorName[29])).to.be.below(25);
        expect(parseInt(creatorName[33])).to.be.below(25);
        expect(parseInt(creatorName[37])).to.be.below(25);
    });
})