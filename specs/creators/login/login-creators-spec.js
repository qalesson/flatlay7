const LoginPage = require('../../../page_objects/login-page');
const DashboardPage = require('../../../page_objects/creators/dashboard/dashboard-creators-page');
const Credentials = require('../../../data/Credentials.json');

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe('Login - Creators', () => {
    it('FL-1 Should be able to login with matching credentials', () => {
        LoginPage.login({email: email, password: password});
        DashboardPage.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
    })
})