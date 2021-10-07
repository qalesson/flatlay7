const LoginPage = require('../../../page_objects/login-page');
const DashboardPage = require('../../../page_objects/creators/dashboard/dashboard-creators-page');
const Credentials = require("../../../data/Credentials.json");

const { expect, assert } = require("chai");

const email = Credentials.creators.dashboard.email;
const password = Credentials.creators.dashboard.password;
const ViewPublicProfileUrl = 'profile/nastia'

describe("Dashboard", () => {
    beforeEach(() => {
        // Go to login page and login as a Creator
        LoginPage.login({ email: email, password: password });
        DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
    });

    it('Should see amount of Posts, Following, Followers, Collections FL-5', () => {
        DashboardPage.$$numberOfPosts.forEach(element => {
            expect(parseInt(element.getText())).to.be.a("number");
        })
    });

    it('Should see no posts, no collections text if none exist FL-6', () => {
        const noPosts = DashboardPage.$noPostsTxt.getText()
        expect(noPosts).to.equal('There are no posts here yet');
        DashboardPage.$collectionsBtn.click();
        DashboardPage.$noCollectionsTxt.waitForDisplayed;
        const noCollections = DashboardPage.$noCollectionsTxt.getText()
        expect(noCollections).to.equal('There are no collections here yet');
    });

    it('Should be able to view public profile FL-7', () => {
        DashboardPage.$viewPublicProfileBtn.click();
        DashboardPage.switchToOpenTab();
        expect(browser.getUrl()).to.include(ViewPublicProfileUrl);
        expect(DashboardPage.$landingHeader).to.exist;
    });

    it('Should take to profile upon click on profile icon on the left side over menu items FL-8', () => {
        DashboardPage.$searchBtn.waitForDisplayed();
        DashboardPage.$searchBtn.click();
        DashboardPage.$profilePictureBtn.waitForDisplayed();
        DashboardPage.$profilePictureBtn.click();
        expect(DashboardPage.$viewPublicProfileBtn).to.exist;
    });   
})
