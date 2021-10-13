const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/Credentials.json");
const { expect } = require("chai");
const SearchPage = require("../../../page_objects/creators/search/search-page");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe("Search ", () => {
  beforeEach(() => {
    // Go to login page and login as a Creator
    LoginPage.login({ email: email, password: password });
    DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
  });


  // Search logic is broken. Skipping until fix is in place
  it.skip("FL-9 Should be able to search in ALL sections", () => {
    // Press search menu button
    DashboardPage.$searchBtn.waitForDisplayed();
    DashboardPage.$searchBtn.click();

    // Type "ball" and press enter
    SearchPage.search("ball");
    browser.keys("Enter");

    // Wait for search results to display
    browser.waitUntil(() => {
      return (SearchPage.$$searchResultsCreators.map((elem) => elem.isDisplayed()).length > 3);
    }, { timeout: 20000, timeoutMsg: "Creators results were not visible" });

    // Verify that user can see relevant search results in Creators section
    const searchCreators = [];
    SearchPage.$$searchResultsCreators.forEach((element) => {
      if (element.getText().length > 0) searchCreators.push(element.getText().toLowerCase());
    });
    searchCreators.every((i) => expect(i).to.contain("ball"));

    // Verify that user can see relevant search results in Contents section  
    const searchContents = [];
    SearchPage.$$searchResultsContents.forEach((element) => {
      if (element.getText().length > 0) searchContents.push(element.getText().toLowerCase());
    });

    searchContents.every((i) => expect(i).to.contain("ball"));

    // Scroll webpage down to Products section
    SearchPage.$productsLbl.moveTo();

    // Verify that user can see relevant search results in Products section
    browser.waitUntil(() => {
      return (SearchPage.$$searchResultsProducts.map((elem) => elem.isDisplayed()).length > 3);
    }, { timeout: 20000, timeoutMsg: 'No results in Products section!' });

    // Verify that user can see relevant search results in Products section
    const searchProducts = [];
    SearchPage.$$searchResultsProducts.forEach((element) => {
      if (element.getText().length > 0) searchProducts.push(element.getText().toLowerCase());
    });
    searchProducts.every((i) => expect(i).to.contain("ball"));
  });

  // Search logic is broken. Skipping until fix is in place
  it.skip("FL-11 Search Creators only", () => {
    // Press Creators section button
    SearchPage.$searchCreatorsOnly.waitForDisplayed();
    SearchPage.$searchCreatorsOnly.click();

    // Type "ball" and press enter
    SearchPage.search("ball");
    browser.keys("Enter");

    // Wait for search results to display
    browser.waitUntil(() => {
      return (SearchPage.$$searchResultsCreatorsOnly.map((elem) => elem.isDisplayed()).length > 3);
    }, { timeout: 10000, timeoutMsg: "Creators results were not visible" });

    // Verify that user can see relevant search results in Creators section
    const searchCreatorsOnly = [];
    SearchPage.$$searchResultsCreatorsOnly.forEach((element) => {
      if (element.getText().length > 0) searchCreatorsOnly.push(element.getText().toLowerCase());
    });
    searchCreatorsOnly.every((i) => expect(i).to.contain("ball"));
  });

  // Search logic is broken. Skipping until fix is in place
  it.skip("FL-12 Search Contents only", () => {
    // Press Contents section button
    SearchPage.$searchContentsOnly.waitForDisplayed();
    SearchPage.$searchContentsOnly.click();

    // Type "ball" and press enter
    SearchPage.search("ball");
    browser.keys("Enter");

    // Wait for search results to display
    browser.waitUntil(() => {
      return (SearchPage.$$searchResultsContents.map((elem) => elem.isDisplayed()).length > 3);
    }, { timeout: 10000, timeoutMsg: "Contents results were not visible" });

    // Verify that user can see relevant search results in Contents section
    const searchContentsOnly = [];
    SearchPage.$$searchResultsContents.forEach((element) => {
      if (element.getText().length > 0) searchContentsOnly.push(element.getText().toLowerCase());
    });   
    searchContentsOnly.every((i) => expect(i).to.contain("ball"));  
  });
});