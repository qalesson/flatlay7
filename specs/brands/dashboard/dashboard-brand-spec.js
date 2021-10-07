const LoginPage = require('../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');

const Credentials = require("../../../data/Credentials.json");
const Plans = require("../../../data/plan.json");

const {expect} = require('chai');

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;


describe('Dashboard - Brand', () => {
    beforeEach(function () {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
    });

    it('Should get redirected to discover page upon click on discover FL-34', () => {
        DashboardBrandsPage.$discoverButton.waitForClickable();
        DashboardBrandsPage.$discoverButton.click();
        DashboardBrandsPage.$discoverCreatorsByLink.waitForDisplayed();
    });

    it('Should get redirected to campaigns page upon click on campaigns FL-35', () => {
        DashboardBrandsPage.$campaignsButton.waitForClickable()
        DashboardBrandsPage.$campaignsButton.click();
        DashboardBrandsPage.$campaignsNavigationBar.waitForDisplayed();
    });

    it.skip('Should get redirected to saved page upon click on saved FL-68', () => {
        DashboardBrandsPage.$savedButton.waitForClickable();
        DashboardBrandsPage.$savedButton.click();
        DashboardBrandsPage.$createNewListLink.waitForDisplayed();
    });

    it('Should get redirected to home page upon click on home FL-69', () => {
        DashboardBrandsPage.$homeButton.waitForClickable();
        DashboardBrandsPage.$homeButton.click();
        DashboardBrandsPage.$currentUserName.waitForDisplayed();
    });

    it('User should be able to see 4 monthly plans on "Plans" page FL-66', () => {
        DashboardBrandsPage.changePlanPage();

        browser.waitUntil(() => {
            return DashboardBrandsPage.$$plansLbl.map((elem) => elem.isDisplayed()).length > 3;
        }, { timeout: 10000, timeoutMsg: '3 elements have not been displayed' });

        //Verify all the text in BASIC plan
        const basic = [];
        DashboardBrandsPage.$$basicEnterprisePlanLbl.forEach(element => {
            basic.push(element.getText())
        })
        expect(basic[0]).to.contain(Plans.Basic.name);
        expect(basic[0]).to.contain(Plans.Basic.body.monthlyPrice);
        expect(basic[0]).to.contain(Plans.Basic.body.description1);
        expect(basic[0]).to.contain(Plans.Basic.body.description2);
        expect(basic[0]).to.contain(Plans.Basic.body.description3);
        expect(basic[0]).to.contain(Plans.Basic.body.description4);
        expect(basic[0]).to.contain(Plans.Basic.body.description5);

        //Verify all the text in PRO plan
        const pro = [];
        DashboardBrandsPage.$$proPremiumPlanLbl.forEach(element => {
            pro.push(element.getText())
        })
        expect(pro[0]).to.contain(Plans.Pro.name);
        expect(pro[0]).to.contain(Plans.Pro.body.monthlyPrice);
        expect(pro[0]).to.contain(Plans.Pro.body.description1);
        expect(pro[0]).to.contain(Plans.Pro.body.description2);
        expect(pro[0]).to.contain(Plans.Pro.body.description3);
        expect(pro[0]).to.contain(Plans.Pro.body.description4);
        expect(pro[0]).to.contain(Plans.Pro.body.description5);
        expect(pro[0]).to.contain(Plans.Pro.body.description6);
        expect(pro[0]).to.contain(Plans.Pro.body.description7);
        expect(pro[0]).to.contain(Plans.Pro.body.description8);

        //Verify all the text in PREMIUM plan
        const premium = [];
        DashboardBrandsPage.$$proPremiumPlanLbl.forEach(element => {
            premium.push(element.getText())
        })
        expect(premium[1]).to.contain(Plans.Premium.name);
        expect(premium[1]).to.contain(Plans.Premium.body.monthlyPrice);
        expect(premium[1]).to.contain(Plans.Premium.body.description1);
        expect(premium[1]).to.contain(Plans.Premium.body.description2);
        expect(premium[1]).to.contain(Plans.Premium.body.description3);
        expect(premium[1]).to.contain(Plans.Premium.body.description4);
        expect(premium[1]).to.contain(Plans.Premium.body.description5);
        expect(premium[1]).to.contain(Plans.Premium.body.description6);
        expect(premium[1]).to.contain(Plans.Premium.body.description7);

        //Verify all the text in ENTERPRISE plan
        const enterprise = [];
        DashboardBrandsPage.$$basicEnterprisePlanLbl.forEach(element => {
            enterprise.push(element.getText())
        });
        expect(enterprise[1]).to.contain(Plans.Enterprise.name);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description1);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description2);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description3);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description4);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description5);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description6);

    });

    it('User should be able to see 4 yearly plans on "Plans" page FL-67', () => {
        DashboardBrandsPage.changePlanPage();

        DashboardBrandsPage.$yearlyPlansBtn.waitForClickable();
        DashboardBrandsPage.$yearlyPlansBtn.click();

        browser.waitUntil(() => {
            return DashboardBrandsPage.$$plansLbl.map((elem) => elem.isDisplayed()).length > 3;
        }, { timeout: 10000, timeoutMsg: '3 elements have not been displayed' });

        //Verify all the text in BASIC plan
        const basic = [];
        DashboardBrandsPage.$$basicEnterprisePlanLbl.forEach(element => {
            basic.push(element.getText())
        })
        expect(basic[0]).to.contain(Plans.Basic.name);
        expect(basic[0]).to.contain(Plans.Basic.body.annualPrice);
        expect(basic[0]).to.contain(Plans.Basic.body.description1);
        expect(basic[0]).to.contain(Plans.Basic.body.description2);
        expect(basic[0]).to.contain(Plans.Basic.body.description3);
        expect(basic[0]).to.contain(Plans.Basic.body.description4);
        expect(basic[0]).to.contain(Plans.Basic.body.description5);

        //Verify all the text in PRO plan
        const pro = [];
        DashboardBrandsPage.$$proPremiumPlanLbl.forEach(element => {
            pro.push(element.getText())
        })
        expect(pro[0]).to.contain(Plans.Pro.name);
        expect(pro[0]).to.contain(Plans.Pro.body.annualPrice);
        expect(pro[0]).to.contain(Plans.Pro.body.description1);
        expect(pro[0]).to.contain(Plans.Pro.body.description2);
        expect(pro[0]).to.contain(Plans.Pro.body.description3);
        expect(pro[0]).to.contain(Plans.Pro.body.description4);
        expect(pro[0]).to.contain(Plans.Pro.body.description5);
        expect(pro[0]).to.contain(Plans.Pro.body.description6);
        expect(pro[0]).to.contain(Plans.Pro.body.description7);
        expect(pro[0]).to.contain(Plans.Pro.body.description8);

        //Verify all the text in PREMIUM plan
        const premium = [];
        DashboardBrandsPage.$$proPremiumPlanLbl.forEach(element => {
            premium.push(element.getText())
        })
        expect(premium[1]).to.contain(Plans.Premium.name);
        expect(premium[1]).to.contain(Plans.Premium.body.annualPrice);
        expect(premium[1]).to.contain(Plans.Premium.body.description1);
        expect(premium[1]).to.contain(Plans.Premium.body.description2);
        expect(premium[1]).to.contain(Plans.Premium.body.description3);
        expect(premium[1]).to.contain(Plans.Premium.body.description4);
        expect(premium[1]).to.contain(Plans.Premium.body.description5);
        expect(premium[1]).to.contain(Plans.Premium.body.description6);
        expect(premium[1]).to.contain(Plans.Premium.body.description7);

        //Verify all the text in ENTERPRISE plan
        const enterprise = [];
        DashboardBrandsPage.$$basicEnterprisePlanLbl.forEach(element => {
            enterprise.push(element.getText())
        })
        expect(enterprise[1]).to.contain(Plans.Enterprise.name);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description1);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description2);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description3);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description4);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description5);
        expect(enterprise[1]).to.contain(Plans.Enterprise.body.description6);
    });
});
