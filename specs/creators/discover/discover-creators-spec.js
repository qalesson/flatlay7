const LoginPage = require('../../../page_objects/login-page');
const DashboardPage = require('../../../page_objects/creators/dashboard/dashboard-creators-page');
const Credentials = require('../../../data/Credentials.json');
const DiscoverPage = require('../../../page_objects/creators/discover/discover-creators-page');
const { expect } = require('chai');

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe("Discover - ", () => {
    beforeEach(() => {
        // Go to login page and login as a Creator
        LoginPage.login({ email: email, password: password });
        DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
    });

    it('Should contain username and title of each post FL-81', () => {
        DiscoverPage.$discoverLnk.waitForDisplayed();
        DiscoverPage.$discoverLnk.click();

        //Wait untill at least 9 posts are displayed
        browser.waitUntil(() => {
            return DiscoverPage.$$postsItems.map((elem) => elem.isDisplayed()).length > 8;
        }, 10000, '9 items were not visible');

        //Verify that each post contains usernames and titles with 3+ characters
        DiscoverPage.$$postsItems.forEach(element => {
            let username = element.$('.user-text').getText();
            let title = element.$('.description').getText();

            expect(title.length).to.be.above(2);
        });
    });
});