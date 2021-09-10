const LoginPage = require('../../../page_objects/login-page');
const DashboardPage = require('../../../page_objects/creators/dashboard/dashboard-creators-page');

describe('Login - Creators', () => {
    it('should be able to login with matching credentials FL-1', () => {
        LoginPage.login({ email: 'sergii@khromchenko.com', password: 'sergii@khromchenko.com' });
        DashboardPage.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
    })
})