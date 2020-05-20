import LoginPage from "../page-objects/login.page"
const loginPage = new LoginPage();

class Login{
    login(userName) {
        if($(loginPage.loginButton).waitForDisplayed(3000)) {
            $(loginPage.usernameLogin).setValue(userName);
            const passwordAllText = $(loginPage.allPassText).getText();
            const passwordTitle = $(loginPage.passTextTitle).getText();
            const password = passwordAllText.replace(passwordTitle,"");
            $(loginPage.passLogin).setValue(password);
            $(loginPage.loginButton).click();
        }

    }
}

export const login = new Login();