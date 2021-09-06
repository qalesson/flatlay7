const LoginPage = require("../../page_objects/login-page");
const Credentials = require("../../data/credentials.json");
const { expect, assert } = require("chai");
const SearchPage = require("../../page_objects/creators/search-page");
const DashboardPage = require("../../page_objects/creators/dashboard-creators-page");

describe("Search", () => {
  // This hook runs befor tests
  before(() => {
    // Deleting cookies
    browser.deleteCookies();
  });
  beforeEach(() => {
    // Go to login page and login as a Creator
    LoginPage.login({email: Credentials.loginSpec.username, password: Credentials.loginSpec.password});
        DashboardPage.$accountSettingsLnk.waitForDisplayed({timeoutMsg: 'User was not able to login'});    
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

  it("FL-9 Should be able to search in ALL sections", () => {
    // Press search menu button
    DashboardPage.searchBtn.waitForDisplayed();
    DashboardPage.searchBtn.click();
    
    // Type "ball" and press enter
    SearchPage.search("ball");
    browser.keys("Enter");

    // Wait for search results to display
    browser.waitUntil(() => {
      return (SearchPage.searchResultsCreators.map((elem) => elem.isDisplayed()).length > 3);
    },
    { timeout: 10000, timeoutMsg: "Creators results were not visible" }
    );
    
    // Verify that user can see relevant search results in Creators section
    const searchCreators = [];
    SearchPage.searchResultsCreators.forEach((element) => {
      if(element.getText().length>0) searchCreators.push(element.getText().toLowerCase());
    });        
    expect(searchCreators.length).to.equal(4);      
    searchCreators.every((i) => expect(i).to.contain("ball"));
    
    // Verify that user can see relevant search results in Feeds section  
    const searchFeeds = [];
    SearchPage.searchResultsFeeds.forEach((element) => {
      if(element.length>0) searchFeeds.push(element.getText().toLowerCase());
    });
    expect(searchCreators.length).to.equal(4);       
    searchFeeds.every((i) => expect(i).to.contain("ball"));

    SearchPage.moveToProducts.moveTo();

    // Verify that user can see relevant search results in Products section
    browser.waitUntil(() => {
      return (SearchPage.searchResultsProducts.map((elem) => elem.isDisplayed()).length > 3);
    }, { timeout: 10000, timeoutMsg:'No results in Products section!'});
    
    // Verify that user can see relevant search results in Products section
    const searchProducts = [];
    SearchPage.searchResultsProducts.forEach((element) => {
      if(element.getText().length>0) searchProducts.push(element.getText().toLowerCase());
    });
    console.log(searchProducts);    
    expect(searchProducts.length).to.equal(3);      
    searchProducts.every((i) => expect(i).to.contain("ball"));
  });
});

