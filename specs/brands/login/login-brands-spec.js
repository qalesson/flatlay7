const LoginPage = require('../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../data/Credentials.json")

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

const emailTest = 'test@gmail.com';
const passwordTest = 'password';

describe('Login - Brand', () => {
    it("FL-28 Should be able to login with matching credentials ", () => {
      LoginPage.login({ email: email, password: password, portal: "brands" });
      DashboardBrandsPage.$campaignsButton.waitForDisplayed();
    });

    it("FL-29 Should be able to sign out ", () => {
      LoginPage.login({ email: email, password: password, portal: "brands" });
      DashboardBrandsPage.$campaignsButton.waitForDisplayed();
      DashboardBrandsPage.$profileImage.click();
      DashboardBrandsPage.$signOutButton.waitForDisplayed();
      DashboardBrandsPage.$signOutButton.click();
    });

    it('FL-30 Should not be able to login with incorrect credentials ', () => {
        LoginPage.login({ email: emailTest, password: passwordTest, portal: 'brands' });
        DashboardBrandsPage.$incorrectUsernameError.waitForDisplayed();
    });
})