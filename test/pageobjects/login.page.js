const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Form extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#login-button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (standard_user, secret_sauce) {
        await (await this.inputUsername).setValue(standard_user);
        await (await this.inputPassword).setValue(secret_sauce);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
