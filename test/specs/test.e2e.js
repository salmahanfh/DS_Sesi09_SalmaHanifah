const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const ProductPage = require('../pageobjects/product.page')
const CartPage = require('../pageobjects/cart.page')

describe('Swag Labs', () => {
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedOutUserError()
    })

    it('should get login with visual_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_VISUAL_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })

    it('should get to see product detail page', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.open()
        await HomePage.clickProduct()
        await ProductPage.validateProductDetail()
    })

    it('should get to see cart page' , async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.open()
        await HomePage.cart()
        await CartPage.validateCartPage()
    })

    it('should get to add cart product total' , async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.open()
        await HomePage.clickAddCart()
        await HomePage.validateAddToCart()
    })
})
