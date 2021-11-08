const LoginPage = require("../../../page_objects/login-page");
const { expect } = require("chai");
const RegistrationPage = require("../../../page_objects/registration-page");

describe("Register - Creators", () => {
  it("should be able to register with matching credentials FL-1", () => {
    // Open Homepage
    browser.url("./");

    // Click on Join Today btn
    RegistrationPage.$joinTodayBtn.waitForDisplayed();
    RegistrationPage.$joinTodayBtn.click();

    // Fill in register fields with data
    LoginPage.$continueLnk.waitForDisplayed();
    RegistrationPage.register("creators");

    // Getting email confirmation message from the user inbox
    const confirmationEmail = browser.call(
      async () => await RegistrationPage.mailosaurInbox()
    );

    // Click on email confirmation link
    let emailLink = confirmationEmail.html.links.filter((link) => {
      return link.text === "TAKE ME TO FLATLAY";
    });
    browser.url(emailLink[0].href);

    // Confirm that email confirmation link is working
    RegistrationPage.$welcomeBackLbl.waitForDisplayed();
    expect(RegistrationPage.$welcomeBackLbl.getText()).to.equal(
      "Welcome back to the community"
    );
  });
});
