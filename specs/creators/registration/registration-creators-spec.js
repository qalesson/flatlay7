const RegistrationPage = require('../../../page_objects/registration-page');
const Credentials = require("../../../data/credentials.json");

const { expect } = require("chai");

const username = Credentials.creators.registration.username;
const existingEmail = Credentials.creators.login.email;
const email = Credentials.creators.registration.email;
const password = Credentials.creators.registration.password;

describe("Registration", () => {
    it('User should not be able to register with already existing email', () => {
        RegistrationPage.register({email: existingEmail, password: password});
        RegistrationPage.$existingEmailErr.waitForDisplayed();
        const EmailErr = RegistrationPage.$existingEmailErr.getText()
        expect(EmailErr).to.equal('Email is already registered');
    });

    it('User should not be able to register with no password', () => {
        RegistrationPage.register({username: username, email: email});
        RegistrationPage.$noPasswordErr.waitForDisplayed();
        const PasswordErr = RegistrationPage.$noPasswordErr.getText()
        expect(PasswordErr).to.equal('Password is required');
    });
})