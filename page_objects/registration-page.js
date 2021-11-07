"use strict";

const LoginPage = require("../page_objects/login-page")
const faker = require("faker");
const mailosaurTest = require("../data/mailosaurTest.json");
const MailosaurClient = require("mailosaur");
const randomEmail =
  faker.internet.userName() + mailosaurTest.register.serverDomain;
const randomPassword = faker.internet.password();
const randomUsername = faker.internet.userName();

class Registration {
  get $sportsCommunityLbl() {return $("span=Sports");}
  get $creatorsToFollowDisplay() {return $('[class="creators-wrapper mb-3"]');}
  get $startExploringBtn() {return $("button=Start exploring");}
  get $continueBtn() {return $("button=Continue");}
  get $welcomeBackLbl() { return $("h3=Welcome back to the community"); }
  get $joinTodayBtn() { return $(".ml-2"); }

  // Registration
  register(portal) {
    if (portal === "brands") {
      // Click on Brands register radio button
      LoginPage.$brandsLnk.click();
      // Type in email and password
      LoginPage.$emailTxt.waitForClickable();
      LoginPage.$emailTxt.setValue(randomEmail);
      LoginPage.$passwordTxt.setValue(randomPassword);
    } else if (portal === "creators") {
      LoginPage.$passwordTxt.waitForClickable();
      LoginPage.$emailTxt.setValue(randomEmail);
      LoginPage.$passwordTxt.setValue(randomPassword);
      LoginPage.$usernameTxt.setValue(randomUsername);
      LoginPage.$continueLnk.click();
    }
    // Choose communities to follow
    LoginPage.$continueLnk.waitForClickable();
    this.$sportsCommunityLbl.click();
    LoginPage.$continueLnk.click();

    // Choose creators to follow
    this.$creatorsToFollowDisplay.waitForDisplayed();
    this.$continueBtn.click();

    // Final registration part
    this.$startExploringBtn.waitForDisplayed();
    this.$startExploringBtn.click();
  }

  async mailosaurInbox() {
    const apiKey = mailosaurTest.register.apiKey;
    const serverId = mailosaurTest.register.serverId;
    const mailosaur = new MailosaurClient(apiKey);
    const criteria = { sentTo: randomEmail };
    const email = await mailosaur.messages.get(serverId, criteria, {
      timeout: 5000000,
    });
    return email;
  }
}
module.exports = new Registration();