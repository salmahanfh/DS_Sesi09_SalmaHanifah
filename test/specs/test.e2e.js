const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const ProductPage = require('../pageobjects/product.page')
const CartPage = require('../pageobjects/cart.page')

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

    // Not For Now
    // it('should see product detail', async () => {
    //     await HomePage.clickProduct()
    //     await ProductPage.validateProductDetail()
    // })

    it('should see cart page' , async () => {
        await LoginPage.open()
        await LoginPage.login()
        await HomePage.open()
        //mulai error dari code dibawah
        await HomePage.cart()
        await CartPage.validateCartPage()
    })
})