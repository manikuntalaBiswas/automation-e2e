export default class LoginPage {
    get usernameLogin() {return '//input[@data-test="username"]'}
    get passLogin() {return '//input[@data-test="password"]'}
    get allPassText() {return '//div[@class="login_password"]'}
    get passTextTitle() {return '//div[@class="login_password"]/h4'}
    get loginButton() {return '.btn_action'}
}