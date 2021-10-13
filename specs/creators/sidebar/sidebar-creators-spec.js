const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/Credentials.json");
const { expect } = require("chai");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");
const SidebarCreatorsPage = require("../../../page_objects/creators/sidebar/sidebar-creators-page");

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe("Sidebar", () => {
    beforeEach(() => {
        // Go to login page and login as a Creator
        LoginPage.login({ email: email, password: password });
        DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
    });

    it("FL-76 Should be able to see 10 creators with name, followers and follow btn in 'Creators to follow'", () => {
        //Verifying that 10 'Follow' buttons exist and they are clickable
        browser.waitUntil(() => {
            return SidebarCreatorsPage.$$creatorsFollowBtn.map((elem) => elem.isClickable()).length > 9;
        }, { timeout: 10000, timeoutMsg: '10 elements have not been displayed' });
        // Verify that names are displayed and they contain at least 3 characters 
        let arrayNames = SidebarCreatorsPage.$$creatorsNamesLbl.map(x => x.getText())
        arrayNames.forEach(element => {
            expect(element.length).to.be.above(2)
        });
        // Verify that all of the creators have "Followers" section
        let arrayFollowers = SidebarCreatorsPage.$$creatorsFollowersLbl.map(x => x.getText())
        arrayFollowers.forEach(element => {
            expect(element).to.contain('Followers')
        });
    });

    it("FL-77 Should be able to see 5+ communities with name and follow button", () => {
        //Verify that at least 5 follow buttons exit and clickable
        browser.waitUntil(() => {
            return SidebarCreatorsPage.$$communitiesFollowBtn.map((elem) => elem.isClickable()).length > 4;
        }, { timeout: 10000, timeoutMsg: '5 elements have not been displayed' });
        // Verify that names are displayed and they contain at least 3 characters 
        let arrayNames = SidebarCreatorsPage.$$communitiesNamesLbl.map(x => x.getText())
        arrayNames.forEach(element => {
            expect(element.length).to.be.above(2)
        });
    });
});