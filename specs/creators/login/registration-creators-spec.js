const RegistrationPage = require('../../../page_objects/registration-page');
const Credentials = require('../../../data/credentials.json');

const email = Credentials.creatorRegistrationTest.login.email;
const password = Credentials.creatorRegistrationTest.login.password;

describe('Registration - Creators', () => {
    it('should not be able to register with no username FL-73', () => {
        browser.url('https://new.flatlay.io/register');
        RegistrationPage.registration({ email: email, password: password });
        RegistrationPage.$usernameRequiredError.waitForDisplayed();
    })
})