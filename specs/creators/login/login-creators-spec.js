const LoginPage = require('../../../page_objects/login-page');
const DashboardPage = require('../../../page_objects/creators/dashboard-creators-page/dashboard-creators-page');
const Credentials = require('../../../data/credentials.json');

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe('Login - Creators', () => {
    it('should be able to login with matching credentials FL-1', () => {
        LoginPage.login({email: email, password: password});
        DashboardPage.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
    })
})