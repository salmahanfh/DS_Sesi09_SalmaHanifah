const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const ProductPage = require('../pageobjects/product.page')
const CartPage = require('../pageobjects/cart.page')

describe('Swag Labs', () => {
    it('should login with standard_user', async () => {
        await LoginPage.open()
        await LoginPage.login1()
        await HomePage.validateHomePage()
    })

    it('should get login error with locked_out_user', async () => {
        await LoginPage.open()
        await LoginPage.login2()
        await LoginPage.validateLockedOutUserError()
    })

    it('should get login with visual_user', async () => {
        await LoginPage.open()
        await LoginPage.login3()
        await HomePage.validateHomePage()
    })

    it('should see product detail page', async () => {
        await LoginPage.open()
        await LoginPage.login1()
        await HomePage.open()
        await HomePage.clickProduct()
        await ProductPage.validateProductDetail()
    })

    it('should see cart page' , async () => {
        await LoginPage.open()
        await LoginPage.login1()
        await HomePage.open()
        await HomePage.cart()
        await CartPage.validateCartPage()
    })

    it('should add cart product total' , async () => {
        await LoginPage.open()
        await LoginPage.login1()
        await HomePage.open()
        await HomePage.clickAddCart()
        await HomePage.validateAddToCart()
    })
})
