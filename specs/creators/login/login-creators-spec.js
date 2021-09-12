const LoginPage = require('../../../page_objects/login-page');
<<<<<<< HEAD
const DashboardPage = require('../../../page_objects/creators/dashboard/dashboard-creators-page');

=======
const DashboardPage = require('../../../page_objects/creators/dashboard-creators-page/dashboard-creators-page');
const Credentials = require('../../../data/credentials.json');
>>>>>>> f41979ba23e92fd7a101094218000cba07ac9dbd
describe('Login - Creators', () => {
    it('should be able to login with matching credentials FL-1', () => {
        LoginPage.login({email: Credentials.loginSpec.username, password: Credentials.loginSpec.password});
        DashboardPage.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
    })
})