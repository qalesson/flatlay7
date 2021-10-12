const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/Credentials.json");
const { expect } = require("chai");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");
const DiscoverPage = require("../../../page_objects/creators/discover/discover-creators-page")

const email = Credentials.creators.activity.email;
const password = Credentials.creators.activity.password;

describe("Search - ", () => {
  beforeEach(() => {
    // Go to login page and login as a Creator
    LoginPage.login({ email: email, password: password });
    DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
  });  

  it("FL-81 Should contain username and title on of each post", () => {
    // Press Discover button
    DiscoverPage.$discoverBtn.waitForDisplayed();
    DiscoverPage.$discoverBtn.click();
    
    browser.waitUntil(() => {
        return DiscoverPage.$$postsInfo.map((elem) => elem.isDisplayed()).length > 5;
    }, { timeout: 10000, timeoutMsg: '3 elements have not been displayed' });
    
    // Verify each post contains username and title with 3+ characters    
    DiscoverPage.$$postsInfo.forEach((element) => {
        let username = element.$('.user-text').getText();
        let title = element.$('.description').getText();
             
        expect(title.length).to.be.above(2);        
    });     
  });
});