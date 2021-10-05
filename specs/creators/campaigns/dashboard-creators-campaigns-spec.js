const LoginPage = require('../../../page_objects/login-page');
const DashboardCreatorsCampaigns = require('../../../page_objects/creators/campaigns/dashboard-campaigns-creators-page');
const Credentials = require('../../../data/Credentials.json');


const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe('Login - Creators', () => {
    it('Should be able to search Campaigns FL-74', () => {
        LoginPage.login({email: email, password: password});
        DashboardCreatorsCampaigns.$campaignsNavBotton.click();
        DashboardCreatorsCampaigns.$campaignsSearchBox.setValue('You are the best')
        DashboardCreatorsCampaigns.$campaignsSearchResult.isExisting()
    })
    it('No active campaigns message shows up when searching for not existing word/searchTerm FL-75', () => {
        LoginPage.login({email: email, password: password});
        DashboardCreatorsCampaigns.$campaignsNavBotton.click();
        DashboardCreatorsCampaigns.$campaignsSearchBox.setValue('nubie')
        DashboardCreatorsCampaigns.$campaignsSearchResultEmpty.isExisting();
    })
})