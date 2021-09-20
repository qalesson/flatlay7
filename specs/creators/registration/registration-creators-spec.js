const RegistrationPage = require('../../../page_objects/registration-page');
const Credentials = require("../../../data/credentials.json");

const { expect } = require("chai");

const username = Credentials.creators.registration.email;
const existingEmail = "sergii@khromchenko.com";
const email = Credentials.creators.registration.email;
const password = Credentials.creators.registration.password;

describe("Registration", () => {
    it('User should not be able to register with already existing email', () => {
        RegistrationPage.register({email: existingEmail, password: password});
        RegistrationPage.$existingEmailErr.waitForDisplayed();
        const ErrTxt1= RegistrationPage.$existingEmailErr.getText()
        expect(ErrTxt1).to.equal('Email is already registered');
    });

    it('User should not be able to register with no password', () => {
        RegistrationPage.register({username: username, email: email});
        RegistrationPage.$noPasswordErr.waitForDisplayed();
        const ErrTxt2 = RegistrationPage.$noPasswordErr.getText()
        expect(ErrTxt2).to.equal('Password is required');
    });
})