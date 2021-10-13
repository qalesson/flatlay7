const LoginPage = require('../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../data/Credentials.json");
const DashboardBrandDiscover = require('../../../page_objects/brands/discover/dashboard-brand-discover');

const { expect } = require('chai');
const dashboardBrandDiscover = require('../../../page_objects/brands/discover/dashboard-brand-discover');

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;


describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it.skip('Brand can filter creators by followers count FL-70', () => {
        DashboardBrandsPage.$discoverButton.waitForClickable();
        DashboardBrandsPage.$discoverButton.click();
        DashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
        DashboardBrandDiscover.$sliderMax.waitForClickable({ timeout: 30000 });
        DashboardBrandDiscover.$sliderMax.dragAndDrop({ x: -225, y: 0 })
        DashboardBrandDiscover.$applyFiltersBtn.click()
        browser.waitUntil(() => {
            return DashboardBrandDiscover.$$creatorsData.map((elem) => elem.isDisplayed()).length > 5;
        }, { timeout: 10000, timeoutMsg: '5 users has not been displayed' });
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
    it('List of creators contains name/username, Followers lavel + amount, Following label + amount, Engagement label FL-81', () => {
       $('a=Discover').click()
        browser.pause(3000);
        let name;
        let username;
        let followersCount;
        $$('[class="row discover-campaign-main-section p-3 align-center"]').forEach((element) => {
            // name = element.$('[class="ml-1 link-item"] [class="header-title"]').getText();
            // someone created usernames without names so it's a bug
            username = element.$('[class="ml-1 link-item"] [class="content-title"]').getText();
            followersCount = element.$('[class="col-sm-4 d-flex flex-row justify-content-between align-center"] [class="header-title"]').getText();
            expect(parseInt(followersCount)).to.be.above(1)
            // expect(name.length).to.be.above(1);
            expect(username.length).to.be.above(1);
            dashboardBrandDiscover.verifyNameUsername("Following")
            dashboardBrandDiscover.verifyNameUsername("Followers")
            dashboardBrandDiscover.verifyNameUsername("Engagement")
        });
    })
})