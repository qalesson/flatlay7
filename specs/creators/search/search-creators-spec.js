const LoginPage = require("../../../page_objects/login-page");
const SearchPage = require("../../../page_objects/creators/search/search-page");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");
const Credentials = require("../../../data/credentials.json");

const { expect } = require("chai");

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe("Search", () => {
  beforeEach(() => {
    // Go to login page and login as a Creator
    LoginPage.login({ email: email, password: password });
    DashboardPage.$accountSettingsLnk.waitForDisplayed({ timeoutMsg: 'User was not able to login' });
  });

  it("FL-12 Search Contents only", () => {
    // Press search menu button
    DashboardPage.$searchBtn.waitForDisplayed();
    DashboardPage.$searchBtn.click();

    // Press Contents section button
    SearchPage.$searchContentsOnly.waitForDisplayed();
    SearchPage.$searchContentsOnly.click();

    // Type "ball" and press enter
    SearchPage.search("ball");
    browser.keys("Enter");  

    // Wait for search results to display
    browser.waitUntil(() => {
      return (SearchPage.$$searchResultsContentsOnly.map((elem) => elem.isDisplayed()).length > 3);
    },
    {timeout:10000, timeoutMsg:"Contents results were not visible"});

    // Verify that user can see relevant search results in Contents section
    const searchContentsOnly = [];
    SearchPage.$$searchResultsContentsOnly.forEach((element) => {
      if(element.getText().length>0) searchContentsOnly.push(element.getText().toLowerCase());
    });           
    expect(searchContentsOnly.length).to.equal(8);      
    searchContentsOnly.every((i) => expect(i).to.contain("ball"));    
  });
});