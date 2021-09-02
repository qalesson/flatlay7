const loginUrl = 'https://www.instagram.com/accounts/login/?source=auth_switcher';
const timeout = 20000;
describe('Login', () => {
    it('should not be able to login with none matching credentials', () => {
        // Declare and assign username and password consts
        const username = 'YourUsername';
        const password = 'YourPassword';
        // Navigate to login page
        browser.url(loginUrl)
        // Type in username, password, and click login
        $('[name="username"]').setValue(username);
        $('[name="password"]').setValue(password);
        $('div=Log In').click();
        // Wait for error message
        $('#slfErrorAlert').waitForDisplayed();
    })
})