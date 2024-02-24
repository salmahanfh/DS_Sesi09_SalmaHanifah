const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Swag Labs', () => {
    it('should login with standard_user', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user', async () => {
        await LoginPage.open()
        await LoginPage.login()
        await LoginPage.validateLockedOutUserError()
    })
})