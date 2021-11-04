const LoginPage = require("../../../page_objects/login-page");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");
const mailosaurTest = require("../../../data/mailosaurTest.json");
const faker = require("faker");
const MailosaurClient = require("mailosaur");
const { expect } = require("chai");

describe("Register - Creators", () => {
  it("should be able to register with matching credentials FL-1", () => {
    browser.url("./");

    //   Click on Join Today btn
    LoginPage.$joinTodayBtn.waitForDisplayed();
    LoginPage.$joinTodayBtn.click();

    //   Fill in register fields with data
    const randomEmail =
      faker.internet.userName() + mailosaurTest.register.serverDomain;
    const randomPassword = faker.internet.password();
    const randomUsername = faker.internet.userName();

    LoginPage.$continueLnk.waitForDisplayed();
    LoginPage.register("creators", randomEmail, randomPassword, randomUsername);
    // Getting email confirmation message from the user inbox
    const confirmationEmail = browser.call(async () => {
      const apiKey = mailosaurTest.register.apiKey;
      const serverId = mailosaurTest.register.serverId;
      const mailosaur = new MailosaurClient(apiKey);
      const criteria = {
        sentTo: randomEmail,
      };
      const email = await mailosaur.messages.get(serverId, criteria, {
        timeout: 5000000,
      });
      return email;
    });
    // Click on email confirmation link
    let emailLink = confirmationEmail.html.links.filter((link) => {
      return link.text === "TAKE ME TO FLATLAY";
    });
    browser.url(emailLink[0].href);

    // Confirm that email confirmation link is working
    LoginPage.$welcomeBackLbl.waitForDisplayed();
    expect(LoginPage.$welcomeBackLbl.getText()).to.equal(
      "Welcome back to the community"
    );
  });
});
