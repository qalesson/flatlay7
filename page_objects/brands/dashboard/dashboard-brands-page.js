"use strict";
class DashboardBrand {
    get $homeButton() { return $('[routerlink="/brand/home"]'); }
    get $discoverButton() { return $('[routerlink="/brand/discover"]'); }
    get $campaignsButton() { return $('a=Campaigns'); }
    get $listButton() { return $('[routerlink="/brand/list"]'); }
    get $currentUserName() { return $('[class="current-user-name"]'); }
    get $discoverCreatorsByLink() { return $('span=Discover creators by'); }
    get $campaignsNavigationBar() { return $('[class="d-flex flex-row justify-content-around align-items-center m-3"]'); }
    get $createNewListLink() { return $('[class="create-saved-list-button link-item"]'); }
    get $profileImage() { return $('[class="profile-photo"]'); }
    get $settignsFromImageBtn() { return $('button=Settings'); }
    get $changePlanBtn() { return $('[class="link-items link-item"]'); }
    get $incorrectUsernameError() { return $('[role="alertdialog"]'); }
    get $signOutButton() { return $('button=Sign Out'); }
    get $accountSettingsLnk() { return $('[routerlink="/creator/settings"]'); }
    get $upgradeBtn() { return $('[alt="Upgrade"]'); }
    get $yearlyPlansBtn() { return $('[class="p-2 text-center"]'); }
    get $$basicEnterprisePlanLbl() { return $$('[class="col-sm-6 col-xs-12 p-2 col-md-3 ng-star-inserted"]'); }
    get $$proPremiumPlanLbl() { return $$('[class="col-sm-6 col-xs-12 p-2 col-md-3"]'); }
    get $$plansLbl() { return $$('.col-sm-6.col-xs-12'); }
    get socialAccountsList() { return $$('.social-item'); }

    changePlanPage() {
        // Click on Profile image
        this.$profileImage.waitForClickable();
        this.$profileImage.click();
        // Click on Settings button
        this.$settignsFromImageBtn.waitForDisplayed();
        this.$settignsFromImageBtn.click();
        // Click on Change Plan button
        this.$changePlanBtn.waitForDisplayed();
        this.$changePlanBtn.click();
    }
    connectSocialAccountByText(socialAccountText) {
        const socialAccountItems = {};
        browser.waitUntil(() => {
            return this.socialAccountsList.map((elem) => elem.isDisplayed()).length > 6;
        }, { timeout: 10000, timeoutMsg: 'Social were not visible' });
        this.socialAccountsList.forEach(element => {
            socialAccountItems[element.$('.section-title').getText().toLowerCase()] = element.$('.ml-auto');
        });
        socialAccountItems[socialAccountText].click();
    }
}
module.exports = new DashboardBrand();