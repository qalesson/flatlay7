const LoginPage = require('../../../../page_objects/login-page');
const Credentials = require('../../../../data/Credentials.json');
const { expect } = require('chai');


const email = Credentials.creators.login.email;
const password = Credentials.creators.login.password;

describe('Login - Creators', () => {
    it.only('Should contain username and title on of each post FL-81', () => {
        LoginPage.login({ email: email, password: password });
        $('[routerlink="discover"]').click()
        browser.pause(3000);
        let username;
        let title;
        $$('[class="post-info p-3"]').forEach((element) => {
            username = element.$('[class="name cursor-pointer"]').getText();
            title = element.$('[class="description"]').getText();
            if (
                username === ''
              ) {
                console.log('THERE IS USERNAME WITHOUR TEXT!!! CALL DEVS RIGHT FUC*ING NOW!');
              }
            expect(title.length).to.be.above(3);
        })
    }) 
})

