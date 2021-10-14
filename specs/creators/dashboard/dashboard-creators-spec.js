const LoginPage = require('../../../page_objects/login-page');
const DashboardPage = require('../../../page_objects/creators/dashboard/dashboard-creators-page');
const Credentials = require("../../../data/Credentials.json");

const { expect } = require("chai");

const email = Credentials.creators.dashboard.email;
const password = Credentials.creators.dashboard.password;
const ViewPublicProfileUrl = 'profile/nastia'

describe("Dashboard", () => {
    beforeEach(() => {
        // Go to login page and login as a Creator
        LoginPage.login({ email: email, password: password });
        DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
    });

    it('FL-5 Should see amount of Posts, Following, Followers, Collections', () => {
        DashboardPage.$$numberOfPosts.forEach(element => {
            expect(parseInt(element.getText())).to.be.a("number");
        })
    });

    it('FL-6 Should see no posts, no collections text if none exist', () => {
        const noPosts = DashboardPage.$noPostsTxt.getText()
        expect(noPosts).to.equal('There are no posts here yet');
        DashboardPage.$collectionsBtn.click();
        DashboardPage.$noCollectionsTxt.waitForDisplayed;
        const noCollections = DashboardPage.$noCollectionsTxt.getText()
        expect(noCollections).to.equal('There are no collections here yet');
    });

    it('FL-7 Should be able to view public profile', () => {
        DashboardPage.$viewPublicProfileBtn.click();
        DashboardPage.switchToOpenTab();
        expect(browser.getUrl()).to.include(ViewPublicProfileUrl);
        expect(DashboardPage.$landingHeader).to.exist;
    });
})
