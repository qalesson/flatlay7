const LoginPage = require('../../../page_objects/login-page');
const Credentials = require('../../../data/credentials.json');
const { expect, use, assert } = require('chai');
const registrationPage = require('../../../page_objects/registration-page');

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe('Registration - Creators', () => {
    it('should not be able to register with no username FL-73', () => {
        browser.url('https://new.flatlay.io/register');
        registrationPage.login({ email: email, password: password,});
        LoginPage.$UsernameRequiredError.waitForDisplayed();
    })

    it('user should not be able to register with no password FL- 72', () => {
        const email = 'victor.petrosyan.1994@gmail.com'
        const username = 'victor.petrosyan.1994@gmail.com'
        const password = ''
        browser.url('https://new.flatlay.io/register');
        registrationPage.login({ email: email, password: password ,username:username});
        assert.isTrue($('mat-error=Password is required').isExisting(),'New pop up message was not displayed');
    })

    it('user should not be able to register with already existing email FL-65', () => {
        const email = 'victor.petrosyan.1994@gmail.com'
        const username = 'victor.petrosyan.1994@gmail.com'
        const password = 'vitek1994'
        browser.url('https://new.flatlay.io/register');
        registrationPage.login({ email: email, password: password,username:username });
        assert.isTrue($('mat-error=Email is already registered').isExisting(),'New pop up message was not displayed');
    })
})
