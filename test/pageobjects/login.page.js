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

    //login1 for username standard_user
    async login1 () {
        await this.fieldUsername.setValue(process.env.USERNAME_STANDARD_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    //login2 for username locked_out_user
    async login2 () {
        await this.fieldUsername.setValue(process.env.USERNAME_LOCKED_OUT_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    //login3 for username visual_user
    async login3 () {
        await this.fieldUsername.setValue(process.env.USERNAME_VISUAL_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    //for login error
    async validateLockedOutUserError() {
        expect (this.errorLockedOutUser).toBeDisplayed();
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
