const LoginPage = require("../../../page_objects/login-page");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");
const mailosaurTest = require("../../../data/mailosaurTest.json");
const faker = require("faker");
const MailosaurClient = require("mailosaur");

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

    browser.call(async () => {
      const apiKey = mailosaurTest.register.apiKey;
      const serverId = mailosaurTest.register.serverId;

      const mailosaur = new MailosaurClient(apiKey);

      const criteria = {
        sentTo: randomEmail,
      };

      const email = await mailosaur.messages.get(serverId, criteria);

      console.log(`Subject: ${email.subject}`);
    })();
  });
});
