const LoginPage = require("../../../page_objects/login-page");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");
const SettingsPage = require("../../../page_objects/creators/settings/settings-page");

const Credentials = require("../../../data/credentials.json");
const { expect } = require("chai");

const email = Credentials.creatorSettingsUser.login.email;
const password = Credentials.creatorSettingsUser.login.password;

describe("Settings", () => {
    beforeEach(() => {
        // Go to login page and login as a Creator
        LoginPage.login({ email: email, password: password });
        DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
    });

    it("FL-17 Should be able to add addres", () => {
        let firstName = 'Lisa'
        let lastName = 'Agap'
        let addressLine = '1111 Wilshire Blvd'
        let city  = 'LA'
        let state = 'CA'
        let country = 'USA'
        let zip = '90036'
        // Press settings menu button
        DashboardPage.$settingsBtn.waitForDisplayed();
        DashboardPage.$settingsBtn.click();
        // Press address book button
        SettingsPage.$addressBookBtn.click();
        // Fill out the form
        SettingsPage.$addNewAddressBtn.waitForDisplayed();
        SettingsPage.$addNewAddressBtn.click();
        SettingsPage.$countryFld.waitForDisplayed();
        SettingsPage.$firstNameFld.setValue(firstName);
        SettingsPage.$lastNameFld.setValue(lastName);
        SettingsPage.$addressLineFld.setValue(addressLine);
        SettingsPage.$cityFld.setValue(city);
        SettingsPage.$stateFld.setValue(state);
        SettingsPage.$countryFld.setValue(country);
        SettingsPage.$zipFld.setValue(zip);
        SettingsPage.$submitBtn.click();
        // Verify info
        SettingsPage.$newAddressLbl.waitForDisplayed();
        expect(SettingsPage.$newAddressLbl.getText()).to.contain(firstName);
        expect(SettingsPage.$newAddressLbl.getText()).to.contain(lastName);
        expect(SettingsPage.$newAddressLbl.getText()).to.contain(addressLine);
        expect(SettingsPage.$newAddressLbl.getText()).to.contain(city);
        expect(SettingsPage.$newAddressLbl.getText()).to.contain(state);
        expect(SettingsPage.$newAddressLbl.getText()).to.contain(country);
        expect(SettingsPage.$newAddressLbl.getText()).to.contain(zip);
    });
});

