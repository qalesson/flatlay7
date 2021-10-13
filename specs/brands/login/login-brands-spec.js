const LoginPage = require('../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../data/Credentials.json")

const BrandsSettingsPage = require('../../../page_objects/brands/settings/settings-brands-page');

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

const emailTest = 'qalesson@gmail.com';
const passwordTest = 'qalesson@gmail.com';

describe('Login - Brand', () => {
    
    it('should be able to login with matching credentials FL-28', () => {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
        DashboardBrandsPage.$campaignsButton.waitForDisplayed();

    });

    it('should be able to sign out FL-29', () => {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
        DashboardBrandsPage.$campaignsButton.waitForDisplayed();
        DashboardBrandsPage.$profileImage.click();
        DashboardBrandsPage.$signOutButton.waitForDisplayed();
        DashboardBrandsPage.$signOutButton.click();

    });

    it('should not be able to login with incorrect credentials FL-30', () => {
        LoginPage.login({ email: emailTest, password: passwordTest, portal: 'brands' });
        DashboardBrandsPage.$incorrectUsernameError.waitForDisplayed();
    });

//  it.only('should be able to click connect social media', () => {
//         LoginPage.login({ email: emailTest, password: passwordTest, portal: 'brands'});
//         BrandsSettingsPage.$profilePhoto.waitForDisplayed();
//         BrandsSettingsPage.$profilePhoto.click();
//         BrandsSettingsPage.$settingsBtn.waitForDisplayed();
//         BrandsSettingsPage.$settingsBtn.click();
//         BrandsSettingsPage.clickConnectBtnBySocialMedia('Twitter');
//         browser.debug();

//     })
})