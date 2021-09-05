const LoginPage = require('../../page_objects/login-page');
const DashboardPage = require('../../page_objects/creators/dashboard-creators-page');
const Credentials = require('../../data/credentials.json');
describe('Login - Creators', () => {
    it('should be able to login with matching credentials FL-1', () => {
        LoginPage.login({email: Credentials.loginSpec.username, password: Credentials.loginSpec.password});
        DashboardPage.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
    })
})