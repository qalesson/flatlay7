const LoginPage = require('../../../page_objects/login-page');
const DashboardBrandsPage = require('../../../page_objects/brands/dashboard/dashboard-brands-page');
const Credentials = require("../../../data/credentials.json")

const email = Credentials.brands.login.email;
const password = Credentials.brands.login.password;

describe('Login - Brand', () => {
    it('should be able to login with matching credentials FL-28', () => {
        LoginPage.login({ email: email, password: password, portal: 'brands' });
        DashboardBrandsPage.$campaignsButton.waitForDisplayed();

    });


})