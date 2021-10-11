class SettingsPage {
    get socialAccountsList() { return $$('.social-item');}
    
    connectSocialAccountByText(socialAccountText) {
        const socialAccountItems = {};
        
        // Wait for at least 5 Social acconts to become visible
        browser.waitUntil(() => {
            return this.socialAccountsList.map((elem) => elem.isDisplayed()).length > 6;
        }, { timeout: 10000, timeoutMsg:'Social were not visible'});
        
        // Map all of the Social accounts into an object
        this.socialAccountsList.forEach(element => {
            socialAccountItems[element.$('.section-title').getText().toLowerCase()] = element.$('.ml-auto');
        });
        console.log(socialAccountItems);
        // Click on Connect social account by text
        socialAccountItems[socialAccountText].click();
    }
}

module.exports = new SettingsPage();