const LoginPage = require("../../../page_objects/login-page");
const Credentials = require("../../../data/credentials.json");
const { expect, assert } = require("chai");
const SearchPage = require("../../../page_objects/creators/search/search-page");
const DashboardPage = require("../../../page_objects/creators/dashboard/dashboard-creators-page");

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe("Search", () => {
  // This hook runs befor tests
  before(() => {
    // Deleting cookies
    browser.deleteCookies();
  });
  beforeEach(() => {
    // Go to login page and login as a Creator
    LoginPage.login({email: email, password: password});
        DashboardPage.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});
    // Press search menu button
    DashboardPage.$searchBtn.waitForDisplayed();
    DashboardPage.$searchBtn.click();    
  });
  // This hook runs after each test
  afterEach(() => {
    // Deleting cookies after each session will allow us to have new session before next test starts
    browser.deleteCookies();
  });
  after(() => {
    // Deleting cookies after session
    browser.deleteCookies();
  });

  it("FL-11 Search Creators only", () => {
    // Press Creators section button
    SearchPage.$searchCreatorsOnly.waitForDisplayed();
    SearchPage.$searchCreatorsOnly.click();

    // Type "ball" and press enter
    SearchPage.search("ball");
    browser.keys("Enter");   

    // Wait for search results to display
    browser.waitUntil(() => {
      return (SearchPage.$$searchResultsCreatorsOnly.map((elem) => elem.isDisplayed()).length > 3);
    },
    { timeout: 10000, timeoutMsg: "Creators results were not visible" }
    );

    // Verify that user can see relevant search results in Creators section
    const searchCreatorsOnly = [];
    SearchPage.$$searchResultsCreatorsOnly.forEach((element) => {
      if(element.getText().length>0) searchCreatorsOnly.push(element.getText().toLowerCase());
    });    
    expect(searchCreatorsOnly.length).to.equal(10);      
    searchCreatorsOnly.every((i) => expect(i).to.contain("ball"));    
  });
});