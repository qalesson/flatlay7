const LoginPage = require('../../../../page_objects/login-page');
const dashboardBrandsPage = require('../../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../../data/Credentials.json");
const { expect } = require('chai');
const dashboardBrandDiscover = require('../../../../page_objects/brands/dashboard/discover/dashboard-brand-discover');

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it.only('FL-70', () => {
        dashboardBrandsPage.$discoverButton.waitForClickable();
        dashboardBrandsPage.$discoverButton.click();
        dashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
        dashboardBrandDiscover.$sliderMax.waitForClickable()
        dashboardBrandDiscover.$sliderMax.dragAndDrop({ x: -225, y: 0 })
        dashboardBrandDiscover.$applyFiltersBtn.click()
        browser.waitUntil(() => {
            return  dashboardBrandDiscover.$$creatorsData.map((elem) => elem.isDisplayed()).length > 5;
        }, { timeout: 10000, timeoutMsg:'5 users has not been displayed'});
        const creatorName = [];
        dashboardBrandDiscover.$$creatorsData.forEach(element => {
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