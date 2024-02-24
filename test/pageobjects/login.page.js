const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    get fieldUsername () {return $('#user-name');}
    get fieldPassword () {return $('#password');}
    get btnLogin () {return $('#login-button');}
    get errorLockedOutUser () {return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]');}

    async login (username, password) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.btnLogin.click();
    }

    async validateLockedOutUserError () {
        await this.errorLockedOutUser.waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser).toBeDisplayed()
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
