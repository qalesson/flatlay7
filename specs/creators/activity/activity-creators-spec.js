const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/Credentials.json");
const { expect } = require("chai");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");
const ActivityPage = require("../../../page_objects/creators/activity/activity-creators-page")

const email = Credentials.creators.activity.email;
const password = Credentials.creators.activity.password;

describe("Search - ", () => {
  beforeEach(() => {
    // Go to login page and login as a Creator
    LoginPage.login({ email: email, password: password });
    DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
  });  

  it("FL-16 Should be able to see activities", () => {
    // Press Activity button
    ActivityPage.$activityBtn.waitForDisplayed();
    ActivityPage.$activityBtn.click();
    
    // Verify that user is able to see activities
    const activityCheck = [];
    ActivityPage.$$activityMessages.forEach((element) => {
      if (element.getText().length > 0) activityCheck.push(element.getText());
    });    
    activityCheck.every((i) => expect(i).to.be.a('string'));
  });
});