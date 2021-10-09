const LoginPage = require('../../../../page_objects/login-page');
const DashboardCreatorsCampaigns = require('../../../../page_objects/creators/campaigns/dashboard-campaigns-creators-page');
const Credentials = require('../../../../data/Credentials.json');

const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe('Login - Creators', () => {
    it("FL-74 Should be able to search Campaigns ", () => {
      LoginPage.login({ email: email, password: password });
      DashboardCreatorsCampaigns.$campaignsNavBotton.click();
      DashboardCreatorsCampaigns.$campaignsSearchBox.setValue(
        "You are the best"
      );
      DashboardCreatorsCampaigns.$campaignsSearchResult.isExisting();
    });
    it("FL-75 No active campaigns message shows up when searching for not existing word/searchTerm ", () => {
      LoginPage.login({ email: email, password: password });
      DashboardCreatorsCampaigns.$campaignsNavBotton.click();
      DashboardCreatorsCampaigns.$campaignsSearchBox.setValue("nubie");
      DashboardCreatorsCampaigns.$campaignsSearchResultEmpty.isExisting();
    });
})