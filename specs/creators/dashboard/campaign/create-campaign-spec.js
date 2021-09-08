const LoginPage = require("../../../../page_objects/login-page");
const DashboardPage = require("../../../../page_objects/brands/dashboard-brands-page");
const LoginCredentials = require("../../../../credentials/brands/login/login.json");

describe("Brands", () => {
  it("Should be able to create campaign FL-32 ", () => {

    

    LoginPage.login({
      email: LoginCredentials.login,
      password: LoginCredentials.password,
      portal: "brands",
    });

    DashboardPage.$accountEmail.waitForDisplayed({
      timeoutMsg: "User was not able to login",
    });
  });





});
